# frontend-preinterview-task

안녕하세요, 디어코퍼레이션입니다. 프론트엔드 사전 면접 과제에 응해주셔서 감사합니다.

과제에 정답은 없습니다. 사전 과제를 드리는 가장 큰 목적은 과제를 통해서 면접자님의 어떤 사고과정을 통해 어떤 선택을 하셨는지, 그 과정과 이유들이 합리적이고
타당한지를 검증해보고 싶기 때문입니다. 따라서 과제는 요구사항을 만족하는 수준에서 면접자님의 취향대로 수행해주시면 됩니다.

## 요구사항

게시판을 만들기 위한 요구사항입니다. 아래 적힌 내용들 이외에는 면접자님께서 자유롭게 만들어주시면 됩니다. Optional로 표시한 프레임워크와 라이브러리는
사용하지 않으셔도 됩니다.

### 기술스택

1. React
2. TypeScript
3. 면접자님께 익숙한 UI라이브러리
4. 면접자님께 익숙한 상태관리 라이브러리 (Optional)
5. 면접자님께 익숙한 Form 라이브러리 (Optional)
6. Next.js (Optional)
7. react-query 혹은 useSWR (Optional)
8. jest 혹은 vitest (Optional)

### 요구사항

- 목록 조회, 개별 조회, 등록, 수정, 삭제가 가능한 게시판이다.
- 게시글은 제목과 내용으로 구성한다.
- 페이지네이션을 적용한다.
- 목록 조회 화면에서 게시글 제목을 누르면 상세 조회 화면으로 이동한다.
- 목록 조회 화면에서 게시글 제목을 Command(윈도우는 Ctrl)키와 함께 누르면 브라우저의 새 탭으로 열린다.
- 상세 조회 화면의 URL만으로 현재 어떤 id의 게시글을 조회하고 있는지 알 수 있다.
- 상세 조회 화면 URL을 입력하면 URL에 해당하는 게시글의 상세 조회 화면으로 바로 이동한다.

### 과제를 통해 알고 싶은 내용

- 예쁘게 만들지 않아도 됩니다. 미세한 작업들은 고려하지 않아도 됩니다.
- 요구사항을 잘 만족하셨는지
- 어떤 식으로 파일을 쪼개서 관리하시는지
- 라이브러리를 사용하는 방식
- 면접자님이 선호하시는 코딩 컨벤션 (취향 자체보다는 선택의 이유가 궁금합니다)
- 면접자님이 코드에서 어필하시고 싶은 부분

### 참고

- 과제의 복잡도를 낮추기 위해 실제 api요청을 하지 않고 ArticleRepository를 가짜 api 구현체로서 사용합니다.
  - `const repository: ArticleRepository = new ArticleRepositoryImpl()`의 형태로 사용하시면 됩니다.
- 사용 예시 코드는 `model/Article.unit.test.ts`, `ArticleRepositoryImpl.unit.test.ts`를 참고하세요.
- 필요하다면 제공해드린 코드를 변경해서 사용하시거나 다른 방식으로 백엔드를 만들어 사용하셔도 무관합니다.
