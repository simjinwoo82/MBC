# Google Antigravity CLI (agy) 가이드

Google Antigravity CLI(`agy`)는 터미널 기반의 경량화된 에이전트 상호작용 인터페이스입니다.

## 1. 주요 시작 명령어
- **실행**: 터미널에서 `agy`를 입력하여 CLI를 시작합니다.
- **종료**: `Ctrl+D`를 두 번 누르거나 `/exit` 또는 `/quit`을 입력합니다.
- **설정 파일**: CLI 설정은 `~/.gemini/antigravity-cli/settings.json`에 저장됩니다.

## 2. CLI 플래그 및 옵션 (`agy --help`)
- `--add-dir`: 작업 공간(workspace)에 디렉토리를 추가합니다.
- `-c` / `--continue`: 가장 최근의 대화를 이어서 진행합니다.
- `--conversation <ID>`: 이전 대화 ID를 지정하여 대화를 이어갑니다.
- `--dangerously-skip-permissions`: 툴 권한 요청을 묻지 않고 자동으로 승인합니다.
- `-i` / `--prompt-interactive`: 초기 프롬프트를 대화형으로 실행하고 세션을 유지합니다.
- `--model <MODEL>`: 현재 CLI 세션에 적용할 모델을 설정합니다.
- `--new-project`: 이 세션을 위한 새 프로젝트를 생성합니다.
- `-p` / `--print` 또는 `--prompt`: 단일 프롬프트를 비대화형으로 실행하고 결과를 출력합니다.
- `--sandbox`: 터미널 제한이 활성화된 샌드박스 모드로 실행합니다.

## 3. 하위 명령어 (Subcommands)
- `changelog`: 변경 사항 및 릴리스 노트를 확인합니다.
- `help`: 하위 명령어에 대한 도움말을 표시합니다.
- `install`: 환경 경로 및 셸 설정을 구성합니다.
- `models`: 사용 가능한 모델 목록을 조회합니다.
- `plugin` / `plugins`: 플러그인을 관리합니다 (설치, 삭제, 목록 조회, 활성화/비활성화).
- `update`: CLI를 업데이트합니다.
