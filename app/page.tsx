import Controls from "@/components/Controls";
import SideNav from "@/components/SideNav";

/* 본문. 한/일 텍스트는 lang 속성이 붙은 span 으로 나란히 두고,
   CSS (:root[data-lang]) 가 한쪽을 숨긴다. */
export default function Page() {
  return (
    <>
      <SideNav />
      <main className="page">
        <div className="topbar">
          <span className="kicker">
            Backend Engineer <span className="sep">·</span> Portfolio
          </span>
          <Controls />
        </div>

        <h1 id="about">CHOI DOIL</h1>

        <div className="intro">
          <p className="lead">
            <mark lang="ja">チームから信頼される仲間を目指し、責任感をコードで証明するエンジニア、チョイ・ドイルです。</mark>
            <mark lang="ko">팀으로부터 신뢰받는 동료를 목표로, 책임감을 코드로 증명하는 엔지니어 최도일입니다.</mark>
          </p>

          <div className="tilde" aria-hidden="true">~</div>

          <h3><span lang="ja">失敗の前で学んだ、リーダーと仲間の役割</span><span lang="ko">실패 앞에서 배운 리더와 동료의 역할</span></h3>
          <p lang="ja">
            約 90 名規模のセキュリティサークル「Nimda Security」の部長と、複数のプロジェクトのリーダーを務める中で定めたリーダーシップの基準は「責任感」です。部長時代、サークルのウェブサイトのデータが消失した事故は、その基準を言葉ではなく行動で証明しなければならない瞬間でした。この経験から、開発者が扱うデータはユーザーの信頼そのものであり、それを守ることは機能の実装よりも先に来るべきだと学びました。以来、予期しない障害に直面したときは原因を隠したり後回しにしたりせず透明に共有し、問題から目をそらさず最後まで責任を持つことをモットーにしています。
          </p>
          <p lang="ko">
            약 90명 규모의 보안 동아리 'Nimda Security' 회장과 여러 프로젝트의 팀장을 맡으며 세운 리더십의 기준은 '책임감'입니다. 회장 시절 동아리 웹사이트의 데이터가 소실된 사고는 그 기준을 말이 아니라 행동으로 증명해야 했던 순간이었습니다. 이 경험으로 개발자가 다루는 데이터는 곧 사용자의 신뢰이며, 그것을 지키는 일이 기능 구현보다 먼저라는 것을 배웠습니다. 이후로 예기치 못한 장애를 만나면 원인을 숨기거나 미루지 않고 투명하게 공유하며, 문제를 직면하고 끝까지 책임지는 것을 모토로 삼고 있습니다.
          </p>

          <h3><span lang="ja">AI 時代、記録で鍛えた基礎力</span><span lang="ko">AI 시대, 기록으로 다져온 기본기</span></h3>
          <p lang="ja">
            コードを素早く手に入れられる時代だからこそ、そのコードが自分たちのシステムに合っているかを判断し、ボトルネックを見つけて解決する力は、開発者の基礎力から生まれると考えています。その力を養うため、技術ブログ <a className="link" href="https://novlog.tistory.com/" target="_blank" rel="noopener">nov.Zip<svg className="link-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a> に学習の過程とトラブルシューティングを継続的に記録してきました。答えをそのまま持ってくるのではなく、なぜそう動くのかを自分の言葉で整理し直した 380 本余りの記事と累計 41 万 PV は、その過程の成果です。小手先の技ではなく原理をつかむ基礎力を土台に、実務でも仲間が安心して任せられるシステムに責任を持ちます。
          </p>
          <p lang="ko">
            코드를 빠르게 얻을 수 있는 시대일수록, 그 코드가 우리 시스템에 맞는지 판단하고 병목을 찾아 해결하는 힘은 개발자의 기본기에서 나온다고 생각합니다. 이 힘을 기르기 위해 기술 블로그 <a className="link" href="https://novlog.tistory.com/" target="_blank" rel="noopener">nov.Zip<svg className="link-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>에 학습 과정과 트러블슈팅을 꾸준히 기록해 왔습니다. 답을 그대로 가져오는 데서 멈추지 않고 왜 이렇게 동작하는지 제 언어로 다시 정리한 380여 편의 글과 누적 41만 조회수는 그 과정의 결과물입니다. 요령보다 원리를 붙드는 기본기를 바탕으로, 실무에서도 동료들이 믿고 맡길 수 있는 시스템을 책임지겠습니다.
          </p>
        </div>


        <section id="awards" className="timeline">
          <h2>AWARDS</h2>

          <div className="row row-compact">
            <div className="head">
              <span className="name"><span className="medal">🥉</span>BUSAN DIVE 2026</span>
              <span className="when">2026</span>
            </div>
            <p className="role">
              <span lang="ja">データ活用アプリ開発ハッカソン · 企業賞（Jim Carry）3位</span>
              <span lang="ko">부산시 데이터 활용 해커톤 · 짐캐리 기업상 3위</span>
            </p>
          </div>

          <div className="row row-compact">
            <div className="head">
              <span className="name"><span className="medal">🥉</span>Probono ICT Mentoring</span>
              <span className="when">2024</span>
            </div>
            <p className="role">
              <span lang="ja">ソーシャル部門 アプリ開発コンテスト · 入選</span>
              <span lang="ko">사회적 약자 부문 앱 개발 공모전 · 입선</span>
            </p>
            <p className="links">
              <a className="badge badge-doc" href="https://drive.google.com/file/d/1GhzAXxu4eC_ubEH597vgmuPmWr_GZekF/view" target="_blank" rel="noopener"><svg className="doc-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg><span lang="ja">賞状</span><span lang="ko">상장</span></a>
            </p>
          </div>

          <div className="row row-compact">
            <div className="head">
              <span className="name"><span className="medal">🥇</span>K-Cyber Security Challenge</span>
              <span className="when">2020</span>
            </div>
            <p className="role">
              <span lang="ja">AI 基盤 悪性コード探知 · 忠清圏予選 1位</span>
              <span lang="ko">AI 기반 악성코드 탐지 · 충청권 지역 예선 1위</span>
            </p>
            <p className="links">
              <a className="badge badge-doc" href="https://drive.google.com/file/d/1yPq6ryp7eAoaVPyu5102u1wwmCiC6jOw/view" target="_blank" rel="noopener"><svg className="doc-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg><span lang="ja">賞状</span><span lang="ko">상장</span></a>
            </p>
          </div>
        </section>


        <section id="papers" className="timeline">
          <h2>PAPERS</h2>

          <div className="row row-compact">
            <div className="head">
              <span className="name">KCC 2026</span>
              <span className="when">2026</span>
            </div>
            <p className="role">
              <span lang="ja">HTML 構造を考慮した階層的チャンキングとハイブリッド検索による韓国語技術ブログ RAG の性能最適化</span>
              <span lang="ko">HTML 구조를 고려한 계층적 청킹과 하이브리드 검색을 통한 한국어 기술 블로그 RAG 성능 최적화</span>
            </p>
            <p className="links">
              <a className="badge badge-doc" href="/docs/kcc-2026.pdf" target="_blank" rel="noopener"><svg className="doc-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg><span lang="ja">論文 PDF</span><span lang="ko">논문 PDF</span></a>
            </p>
          </div>

          <div className="row row-compact">
            <div className="head">
              <span className="name">DCS 2026</span>
              <span className="when">2026</span>
            </div>
            <p className="role">
              <span lang="ja">AtCoder ベース企業アルゴリズムコンテストの問題特性変化分析</span>
              <span lang="ko">AtCoder 기반 기업 알고리즘 대회 문항 특성 변화 분석</span>
            </p>
            <p className="links">
              <a className="badge badge-doc" href="https://drive.google.com/file/d/1kXiYSuYPrx-WHe7Ol9qLz_b2JzUQAA1T/view" target="_blank" rel="noopener"><svg className="doc-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg><span lang="ja">論文 PDF</span><span lang="ko">논문 PDF</span></a>
            </p>
          </div>

          <div className="row row-compact">
            <div className="head">
              <span className="name">KIPS 2024</span>
              <span className="when">2024</span>
            </div>
            <p className="role">
              <span lang="ja">AI を基盤とした聴覚支援アプリケーションの開発と適用に関する研究</span>
              <span lang="ko">인공지능 기반 청각 보조 애플리케이션 개발 및 적용 연구</span>
            </p>
            <p className="links">
              <a className="badge badge-doc" href="https://drive.google.com/file/d/1bvJHUd0QQY8eHsqgjDXobr71cdnTMqUX/view" target="_blank" rel="noopener"><svg className="doc-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg><span lang="ja">論文 PDF</span><span lang="ko">논문 PDF</span></a>
            </p>
          </div>
        </section>


        <section id="experience">
          <h2><span lang="ja">EXPERIENCE</span><span lang="ko">EXPERIENCE</span></h2>

          <div className="row">
            <div className="head">
              <span className="name">Ymatics</span>
              <span className="when"><span className="badge badge-when">2026.07 – 2026.08</span></span>
            </div>
            <p className="role">
              <span lang="ja">バックエンドインターン · Python / FastAPI · 法令 RAG チャットボット</span>
              <span lang="ko">백엔드 인턴 · Python / FastAPI · 법령 RAG 챗봇</span>
            </p>
            <p className="desc">
              <span lang="ja">法令知識を検索するチャットボットサービスのエンジニアインターンとして、既存システムのボトルネックと不具合を見つけてコードを修正し、サービスの安定化に貢献しました。あわせて NL2SQL 論文を分析し、非開発者向けの RAG セミナーを行いました。</span>
              <span lang="ko">법령 지식 조회 챗봇 서비스의 엔지니어 인턴으로서, 기존 시스템의 병목과 결함을 찾아 코드를 수정하고 서비스 안정화에 기여했습니다. 더불어 NL2SQL 논문을 분석하고, 비개발자를 위한 RAG 세미나를 진행했습니다.</span>
            </p>
            <ul className="notes notes-2">
              <li lang="ja">
                <b>チャットボット回答の自動評価パイプライン構築</b>
                <ul>
                  <li>KAIST の法令データ（KCL）を正解基準とし RAGAS フレームワークを適用して、定性的な判断に頼っていた法令検索の品質を定量的な数値で測定できる評価環境を整備</li>
                </ul>
              </li>
              <li lang="ko">
                <b>챗봇 답변 자동 평가 파이프라인 구축</b>
                <ul>
                  <li>KAIST 법령 데이터(KCL)를 정답 기준으로 삼고 RAGAS 프레임워크를 적용하여, 정성적 판단에 의존하던 법령 조회 품질을 정량적 수치로 측정하는 평가 환경 마련</li>
                </ul>
              </li>
              <li lang="ja">
                <b>不要な LLM 呼び出しの除去で API 応答 43% 短縮（12.9 秒 → 7.4 秒）</b>
                <ul>
                  <li>応答を区間ごとに計測し、最終結果に使われないのに毎回実行されていたボトルネックを特定して除去</li>
                </ul>
              </li>
              <li lang="ko">
                <b>불필요한 LLM 호출 제거로 API 응답 속도 43% 단축 (12.9초 → 7.4초)</b>
                <ul>
                  <li>응답 구간별 성능 계측을 통해, 최종 결과에 사용되지 않음에도 매번 실행되던 병목 구간을 식별하고 제거</li>
                </ul>
              </li>
              <li lang="ja">
                <b>ログ消失を防ぐ保存方式の再設計</b>
                <ul>
                  <li>サーバーの異常終了時に全ログが消えていた、既存のファイル上書き構造の弱点を把握</li>
                  <li>1 行ずつ追記する JSONL（Append-only）方式に改め、ファイル肥大化時の性能低下を防ぎつつ、障害時にも記録済みのログが保持されるようにした</li>
                </ul>
              </li>
              <li lang="ko">
                <b>로그 유실 방지를 위한 저장 방식 재설계</b>
                <ul>
                  <li>서버 비정상 종료 시 전체 로그가 소실되던 기존 파일 덮어쓰기 구조의 취약점 파악</li>
                  <li>한 줄씩 덧붙이는 JSONL(Append-only) 방식으로 개편하여, 파일 확장 시의 성능 저하를 막고 장애 발생 시에도 이미 기록된 로그가 보존되도록 함</li>
                </ul>
              </li>
              <li lang="ja">
                <b>法令データの埋め込み欠落の不具合を解決</b>
                <ul>
                  <li>データ取り込み時に 450 字を超える文が切り捨てられ、最大 60% の知識データが欠落していた原因を突き止め、パイプラインのロジックを正常化</li>
                </ul>
              </li>
              <li lang="ko">
                <b>법령 데이터 임베딩 누락 결함 해결</b>
                <ul>
                  <li>데이터 적재 과정에서 450자를 초과하는 문장이 절삭되어 최대 60%의 지식 데이터가 누락되던 에러 원인을 규명하고 파이프라인 로직 정상화</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>


        <section id="projects">
          <h2>PROJECTS</h2>

          <div className="row">
            <div className="head">
              <a className="name" href="https://nimda.kr">NIMDA Community Platform</a>
              <span className="when"><span className="badge badge-type"><span lang="ja">チーム</span><span lang="ko">팀 프로젝트</span></span><span className="badge badge-when">2025.12 – 2026.03</span></span>
            </div>
            <p className="role">
              <span lang="ja">セキュリティサークルのコミュニティ · BE 3 · FE 2</span>
              <span lang="ko">보안 동아리 커뮤니티 · BE 3 · FE 2</span>
              <span className="badge">Team Leader</span><span className="badge">Backend Engineer</span>
            </p>
            <p className="links">
              <a className="badge badge-doc" href="https://github.com/Nimda-Security/Nimda" target="_blank" rel="noopener"><svg className="doc-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor"/></svg><span lang="ja">GitHub</span><span lang="ko">GitHub</span></a>
              <a className="badge badge-doc" href="https://nimda.kr" target="_blank" rel="noopener"><svg className="doc-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" fill="none" stroke="currentColor" strokeWidth="2"/></svg><span lang="ja">nimda.kr · 稼働中</span><span lang="ko">nimda.kr · 운영 중</span></a>
            </p>
            <p className="desc">
              <span lang="ja">外部ホスティングで運用していた旧サークルサイトが、決済トラブルとバックアップ不在によりデータを失ったことを受け、同じ失敗を繰り返さないために、バックエンドの部員をメンタリングしながらコミュニティプラットフォームを一から企画し直して再構築しました。学生でも維持できる費用を基準に AWS Lightsail へインフラを移し、定期バックアップとロギングパイプラインを備えて、障害時にすぐ原因を追跡し復旧できるようにしています。掲示板・部員管理・大会運営を一つにまとめ、現在も実運用中です。</span>
              <span lang="ko">외부 호스팅으로 운영하던 기존 동아리 사이트가 결제 문제와 백업 부재로 데이터를 잃은 뒤, 같은 실수를 반복하지 않기 위해 백엔드 부원들을 멘토링하며 커뮤니티 플랫폼을 처음부터 다시 기획해 재구축했습니다. 학생 수준에서 유지 가능한 비용을 기준으로 AWS Lightsail로 인프라를 옮기고, 정기 백업과 로깅 파이프라인을 두어 장애 시 원인 추적과 복구가 바로 가능하게 했습니다. 게시판·부원 관리·대회 운영을 한곳에 모아 지금도 실제로 운영 중입니다.</span>
            </p>
            <dl className="stack">
              <dt>Backend</dt><dd>Spring Boot · JPA · MySQL · Redis</dd>
              <dt>Frontend</dt><dd>React · Next.js</dd>
              <dt>Infra</dt><dd>Docker · Nginx · AWS Lightsail</dd>
            </dl>
            <figure className="shot shot-crop">
              <img src="assets/nimda.png" alt="NIMDA 메인 화면" width="1020" height="951" loading="lazy" />
            </figure>
          </div>

          <div className="row">
            <div className="head">
              <a className="name" href="https://github.com/novvvv/RagBlog">RagBlog RAG Pipeline</a>
              <span className="when"><span className="badge badge-type"><span lang="ja">個人</span><span lang="ko">개인 프로젝트</span></span><span className="badge badge-when">2025.06 – 2025.11</span></span>
            </div>
            <p className="role">
              <span lang="ja">技術ブログ RAG パイプライン · 産学連携課題</span>
              <span lang="ko">기술 블로그 RAG 파이프라인 · 산학과제</span>
              <span className="badge">1st Author</span><span className="badge">Backend Engineer</span>
            </p>
            <p className="links">
              <a className="badge badge-doc" href="https://github.com/novvvv/RagBlog" target="_blank" rel="noopener"><svg className="doc-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor"/></svg><span lang="ja">GitHub</span><span lang="ko">GitHub</span></a>
            </p>
            <p className="desc">
              <span lang="ja">運営している技術ブログの記事の中から読者が欲しい情報にすぐたどり着けるよう、ブログの内容を根拠に答える AI チャットボットの導入を企画しました。ところが既存の単純なテキスト分割をそのまま使うと、技術文書の核であるコードブロックや表の構造が途切れ、文脈が崩れてしまいました。これを解決するため、ウェブ文書の構造を保ったまま検索・回答する RAG パイプラインを自ら設計し、375 件の記事で評価しました。その結果、回答が根拠に忠実な度合い（Faithfulness）が <strong>0.75 から 0.85</strong> に上がり、<strong>1.2B の小型モデル</strong>でも GPT-4o と同等の品質を確認して、KCC 2026 の論文につながりました。<a href="#papers">→ KCC 2026 論文</a></span>
              <span lang="ko">운영 중인 기술 블로그의 글 속에서 독자가 원하는 정보를 바로 찾을 수 있도록, 블로그 내용을 근거로 답하는 AI 챗봇 도입을 기획했습니다. 그런데 기존 단순 텍스트 분할을 그대로 쓰면 기술 문서의 핵심인 코드 블록과 표의 구조가 끊겨 문맥이 무너졌습니다. 이를 해결하기 위해 웹 문서의 구조를 보존한 채 검색하고 답하는 RAG 파이프라인을 직접 설계하고, 375개 포스트로 평가했습니다. 그 결과 답변의 근거 충실도(Faithfulness)가 <strong>0.75에서 0.85</strong>로 올랐고, <strong>1.2B 소형 모델</strong>로도 GPT-4o와 대등한 품질을 확인해 KCC 2026 논문으로 이어졌습니다. <a href="#papers">→ KCC 2026 논문</a></span>
            </p>
            <ul className="notes">
              <li lang="ja">HTML 見出し（h1–h4）基準の階層的チャンキング + コード・表ブロックの分離で、分割時の文脈断絶を防止</li>
              <li lang="ko">HTML 헤더(h1–h4) 기준 계층적 청킹 + 코드·표 블록 분리로 분할 시 문맥 단절 방지</li>
              <li lang="ja">BM25 + 埋め込みのハイブリッド検索（0.35 : 0.65）と Cross-Encoder 再ランキングで Top-4 を選定 — Dense 検索比 Answer Relevancy +13%</li>
              <li lang="ko">BM25 + 임베딩 하이브리드 검색(0.35 : 0.65)과 Cross-Encoder 재정렬로 Top-4 선정 — Dense 검색 대비 Answer Relevancy +13%</li>
              <li lang="ja">埋め込み 3 種・LLM 3 種を RAGAS で比較し、mxbai-embed-large-v1 + EXAONE-4.0-1.2B の構成を採用</li>
              <li lang="ko">임베딩 3종·LLM 3종을 RAGAS로 비교해 mxbai-embed-large-v1 + EXAONE-4.0-1.2B 구성 채택</li>
            </ul>
            <dl className="stack">
              <dt>RAG</dt><dd>Python · Chroma · BM25 · mxbai-embed-large / mxbai-rerank · EXAONE-4.0</dd>
              <dt>Eval</dt><dd>RAGAS</dd>
              <dt>Web</dt><dd>Next.js · MongoDB</dd>
            </dl>
            <figure className="shot shot-crop">
              <img src="assets/ragblog.png" alt="RagBlog — 글과 RAG 챗봇 화면" width="1128" height="902" loading="lazy" />
            </figure>
          </div>

          <div className="row">
            <div className="head">
              <a className="name" href="https://github.com/novvvv/nyaki">nyaki Vocabulary App</a>
              <span className="when"><span className="badge badge-type"><span lang="ja">個人</span><span lang="ko">개인 프로젝트</span></span><span className="badge badge-when"><span lang="ja">2026.08 – 開発中</span><span lang="ko">2026.08 – 개발 진행 중</span></span></span>
            </div>
            <p className="role">
              <span lang="ja">Web と iOS で同期するクロスプラットフォーム単語帳</span>
              <span lang="ko">웹과 iOS가 동기화되는 크로스플랫폼 단어장</span>
              <span className="badge">Full Stack</span>
            </p>
            <p className="links">
              <a className="badge badge-doc" href="https://github.com/novvvv/nyaki" target="_blank" rel="noopener"><svg className="doc-icon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor"/></svg><span lang="ja">GitHub</span><span lang="ko">GitHub</span></a>
            </p>
            <p className="desc">
              <span lang="ja">外国語の勉強が好きで、これまで数多くの単語アプリを使ってきました。机では Web、外ではスマホと場面が分かれるのに、同じ単語帳が Web とアプリの間でつながらないのがいつも不満でした。そこで Web と iOS で同じ単語帳をリアルタイムに同期し、街で見かけた単語を OCR でその場に保存できる自分専用の単語帳を作ることにしました。地下鉄のように通信が不安定な場所でも学習が途切れないよう、モバイルはオフライン優先で設計し、接続が戻れば変更分だけを送ります。単語登録から復習まで、自分が毎日使うことを前提に作っている進行中のプロジェクトです。</span>
              <span lang="ko">외국어 공부를 좋아해서 여러 단어 앱을 써 봤습니다. 책상에서는 웹, 밖에서는 폰으로 쓰는데 같은 단어장이 웹과 앱 사이에서 이어지지 않는 점이 늘 아쉬웠습니다. 그래서 웹과 iOS에서 같은 단어장을 실시간으로 동기화하고, 길에서 마주친 단어를 OCR로 그 자리에서 저장할 수 있는 제 전용 단어장을 만들기로 했습니다. 지하철처럼 통신이 불안정한 곳에서도 학습이 끊기지 않도록 모바일은 오프라인 우선으로 설계했고, 연결이 돌아오면 변경분만 보냅니다. 단어 등록부터 복습까지 제가 매일 쓰는 것을 전제로 만들고 있는 진행 중인 프로젝트입니다.</span>
            </p>
            <ul className="notes">
              <li lang="ja">モバイルは Drift（SQLite）ローカル DB でオフライン完結。変更は outbox に溜め、接続時に <code>SyncCoordinator</code> が送信し、サーバーは変更カーソルを保持してアプリは前回カーソル以降の差分だけを受け取る</li>
              <li lang="ko">모바일은 Drift(SQLite) 로컬 DB로 오프라인에서 완결. 변경은 outbox에 쌓아 두고 연결 시 <code>SyncCoordinator</code>가 전송하며, 서버는 변경 커서를 유지해 앱은 마지막 커서 이후 변경분만 받아감</li>
              <li lang="ja">サーバーを source of truth とし、Web は直接 CRUD。削除はソフトデリート、同じ単語が両側で編集された衝突は <code>updated_at</code> で解決</li>
              <li lang="ko">서버를 source of truth로 두고 웹은 직접 CRUD. 삭제는 소프트 딜리트, 같은 단어가 양쪽에서 수정된 충돌은 <code>updated_at</code>으로 해결</li>
              <li lang="ja">Firebase トークン認証でユーザーごとにデータを分離</li>
              <li lang="ko">Firebase 토큰 인증으로 사용자별 데이터 격리</li>
            </ul>
            <dl className="stack">
              <dt>Mobile</dt><dd>Flutter · Drift (SQLite)</dd>
              <dt>Web</dt><dd>Next.js</dd>
              <dt>Backend</dt><dd>FastAPI · PostgreSQL · Firebase Auth</dd>
            </dl>
            <p className="shot-label">Web</p>
            <figure className="shot">
              <img src="assets/nyaki.png" alt="nyaki 웹 테스트 화면" width="1253" height="747" loading="lazy" />
            </figure>
            <p className="shot-label">iOS · Flutter</p>
            <div className="shots-mobile">
              <figure className="shot"><img src="assets/nyaki-app-1.png" alt="nyaki 앱 홈" width="640" height="1243" loading="lazy" /></figure>
              <figure className="shot"><img src="assets/nyaki-app-2.png" alt="nyaki 앱 퀘스트" width="640" height="1243" loading="lazy" /></figure>
              <figure className="shot"><img src="assets/nyaki-app-3.png" alt="nyaki 앱 테스트" width="640" height="1243" loading="lazy" /></figure>
              <figure className="shot"><img src="assets/nyaki-app-4.png" alt="nyaki 앱 마이페이지" width="640" height="1243" loading="lazy" /></figure>
            </div>
          </div>
      </section>


        <section id="activity">
          <h2>ACTIVITY</h2>

          <div className="row">
            <div className="head">
              <span className="name"><span lang="ja">非開発者向け RAG 社内セミナー</span><span lang="ko">비개발자 대상 RAG 사내 세미나</span></span>
              <span className="when">2026.07</span>
            </div>
            <p className="role">
              <span lang="ja">Ymatics · 企画・営業職向け</span>
              <span lang="ko">Ymatics · 기획·영업 직군 대상</span>
            </p>
            <p className="desc">
              <span lang="ja">インターンシップ中に企画・営業職を対象に、社内チャットボットの RAG の仕組みを説明するセミナーを主導しました。技術用語の代わりに実際のサービス画面を使い、検索と生成がつながる流れを直感的に説明しました。</span>
              <span lang="ko">인턴십 중 기획·영업 직군을 대상으로 사내 챗봇의 RAG 동작 원리를 설명하는 세미나를 주도했습니다. 기술 용어 대신 실제 서비스 화면을 활용해 검색과 생성의 연결 과정을 직관적으로 설명했습니다.</span>
            </p>
          </div>

          <div className="row">
            <div className="head">
              <span className="name"><span lang="ja">Spring Boot バックエンドメンタリング</span><span lang="ko">Spring Boot 백엔드 멘토링</span></span>
              <span className="when">2025.12 – 2026.03</span>
            </div>
            <p className="role">
              <span lang="ja">Nimda Security 部員向け</span>
              <span lang="ko">Nimda Security 부원 대상</span>
            </p>
            <p className="desc">
              <span lang="ja">バックエンド開発を始める部員を対象に、Spring Boot と JPA による REST API サーバー構築のメンタリングを行いました。理論にとどまらず NIMDA コミュニティプラットフォームを一緒に完成させる過程で、例外処理やコードレビューの経験を共有しました。<a href="#projects">→ NIMDA</a></span>
              <span lang="ko">백엔드 개발에 입문하는 부원들을 대상으로 Spring Boot와 JPA 기반 REST API 서버 구축 멘토링을 진행했습니다. 이론에 그치지 않고 NIMDA 커뮤니티 플랫폼을 함께 완성하는 과정에서 예외 처리와 코드 리뷰 경험을 나눴습니다. <a href="#projects">→ NIMDA</a></span>
            </p>
          </div>

          <div className="row">
            <div className="head">
              <span className="name"><span lang="ja">情報セキュリティサークル Nimda Security 部長</span><span lang="ko">정보보안 동아리 Nimda Security 회장</span></span>
              <span className="when">2024 – 2025</span>
            </div>
            <p className="role">
              <span lang="ja">公州大学校 · 約 90 名規模</span>
              <span lang="ko">공주대학교 · 약 90명 규모</span>
            </p>
            <p className="desc">
              <span lang="ja">サークル初の定期大会 NimdaCon の開催とオンラインジャッジの導入で、アルゴリズム学習の基盤を整えました。運営中に経験したデータ消失事故をきっかけに、コミュニティプラットフォーム NIMDA を一から設計し直して開発しました（部員向け C++ / Java アルゴリズムメンタリングも並行）。<a href="#projects">→ NIMDA</a></span>
              <span lang="ko">최초의 정기 대회(NimdaCon) 개최와 온라인 저지를 도입해 알고리즘 학습 기반을 다졌습니다. 운영 중 겪은 데이터 소실 사고를 계기로 커뮤니티 플랫폼 NIMDA를 밑바닥부터 다시 설계하고 개발했습니다(부원 대상 C++ / Java 알고리즘 멘토링 병행). <a href="#projects">→ NIMDA</a></span>
            </p>
          </div>

          <div className="row">
            <div className="head">
              <a className="name" href="https://novlog.tistory.com/">nov.Zip</a>
              <span className="when">2021 – Now</span>
            </div>
            <p className="role">
              <span lang="ja">技術ブログ · 382 本 · 累計 41 万 PV</span>
              <span lang="ko">기술 블로그 · 382편 · 누적 41만 PV</span>
            </p>
            <p className="desc">
              <span lang="ja">Spring、AWS などバックエンド技術の動作原理と学習の過程を継続的に記録してきました。この記録をデータセットとして、ブログの内容を根拠に答える RAG チャットボット（RagBlog）を自作し、KCC 2026 の論文発表へと発展させました。<a href="#projects">→ RagBlog</a></span>
              <span lang="ko">Spring, AWS 등 백엔드 기술의 동작 원리와 학습 과정을 꾸준히 기록해 왔습니다. 이 기록들을 데이터셋으로 활용해 블로그 내용을 근거로 답하는 RAG 챗봇(RagBlog)을 자체 개발했으며, 이를 KCC 2026 논문 발표로 발전시켰습니다. <a href="#projects">→ RagBlog</a></span>
            </p>
          </div>
        </section>


        <section id="education">
          <h2>EDUCATION</h2>

          <div className="row">
            <div className="head">
              <span className="name"><span lang="ja">公州大学校 コンピュータ工学部</span><span lang="ko">공주대학교 컴퓨터공학부</span></span>
              <span className="when">2020 · 2027</span>
            </div>
            <p className="role">
              <span lang="ja">GPA 3.9 / 4.5 · 2027.03 卒業見込み</span>
              <span lang="ko">학점 3.9 / 4.5 · 2027.03 졸업 예정</span>
            </p>
          </div>

          <div className="row">
            <div className="head">
              <span className="name"><span lang="ja">大韓民国 空軍</span><span lang="ko">대한민국 공군</span></span>
              <span className="when">2021.09 – 2023.06</span>
            </div>
            <p className="role">
              <span lang="ja">兵役 · 満期除隊</span>
              <span lang="ko">병역 · 만기 제대</span>
            </p>
          </div>

        </section>


        <section id="certifications">
          <h2>CERTIFICATIONS</h2>

          <div className="row row-compact">
            <div className="head">
              <span className="name"><span lang="ja">情報処理技士</span><span lang="ko">정보처리기사</span></span>
              <span className="when">2026.07</span>
            </div>
            <p className="role">
              <span lang="ja">筆記合格</span>
              <span lang="ko">필기 합격</span>
            </p>
          </div>

          <div className="row row-compact">
            <div className="head">
              <span className="name">SQLD</span>
              <span className="when">2025.09</span>
            </div>
            <p className="role">
              <span lang="ja">SQL開発者（SQL Developer）</span>
              <span lang="ko">SQL 개발자 (SQL Developer)</span>
            </p>
          </div>

          <div className="row row-compact">
            <div className="head">
              <span className="name">JLPT N1</span>
              <span className="when">2024</span>
            </div>
            <p className="role">
              <span lang="ja">日本語能力試験 · 151 点</span>
              <span lang="ko">일본어능력시험 · 151점</span>
            </p>
          </div>
        </section>


        <section id="skills">
          <h2>SKILLS</h2>
          <dl className="line"><dt>Language</dt><dd><mark className="core">Java</mark> · Python · Dart</dd></dl>
          <dl className="line"><dt>Backend</dt><dd><mark className="core">Spring Boot</mark> · <mark className="core">JPA</mark> · FastAPI</dd></dl>
          <dl className="line"><dt>Frontend</dt><dd>React · Next.js</dd></dl>
          <dl className="line"><dt>Mobile</dt><dd>Flutter</dd></dl>
          <dl className="line"><dt>Database</dt><dd><mark className="core">MySQL</mark> · Redis · MongoDB · Chroma</dd></dl>
          <dl className="line"><dt>Infra</dt><dd>Docker · Nginx (blue-green) · AWS EC2 · Lightsail · S3 · CloudWatch</dd></dl>
          <dl className="line"><dt>AI</dt><dd><mark className="core">RAG</mark> · RAGAS · Ollama</dd></dl>
        </section>


        <section id="connect">
          <h2>CONNECT</h2>
          <ul className="connect">
            <li><a href="mailto:dohana1205@gmail.com">dohana1205@gmail.com</a></li>
            <li><a href="https://github.com/novvvv"><span className="host">github.com/</span>novvvv</a></li>
            <li><a href="https://novlog.tistory.com/"><span className="host">novlog.tistory.com</span></a></li>
          </ul>
        </section>


      </main>
    </>
  );
}
