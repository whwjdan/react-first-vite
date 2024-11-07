/**
 *  리액트용 eslint 플러그인 추가 설치
 * npm install eslint-plugin-jsx-a11y --save-dev   >> jsx 접근성 문제
 * npm install eslint-plugin-react-hooks --save-dev >> 리액트 훅 규칙 위반 찾기
 * prettier eslint 확장프로그램 설치 후 .vscode settings.json에 설정 추가하면
 * 확장프로그램이 설치 된 상태로 설정은 내가 작성한  설정 따라감
 * => 이렇게 하면 저장할 때 자동으로 코드 포맷팅 설정 가능 
 * 원래는 설정 확인 후 재시작 해야함
 * 
 * VS Code에서 Command Palette를 사용해 설정을 다시 로드할 수 있습니다.

Command Palette를 열기: Ctrl + Shift + P (또는 macOS의 경우 Cmd + Shift + P)를 누릅니다.
"Reload Window"를 검색하여 선택합니다.
 */

module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended', // JSX 접근성 규칙 추가
		'plugin:react-hooks/recommended', // Hook 규칙 추가
	],
	rules: {
		'no-unused-vars': 'off',
	},
	settings: {
		react: {
			version: 'detect', // React 버전을 자동 감지합니다.
		},
	},
};
