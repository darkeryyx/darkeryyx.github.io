/**
 * @overview HTML templates for building an app configuration
 * @author André Kless <andre.kless@web.de> 2021-2022, 2024
 */

import { html, render, repeat, unsafeHTML } from 'https://ccmjs.github.io/akless-components/libs/lit/lit.min.js';
export { render };

// app instance (dms) and app state data (data) are shared with the HTML templates
let dms, data;
export const share = ( _dms, _data ) => { dms = _dms; data = _data };

function scrollToTop() {
  document.body.scrollIntoView({ behavior: 'instant', block: 'start' });
}

/**
 * main HTML template
 * @returns {TemplateResult}
 */
export function main() {
  return html`
    <header class="navbar navbar-expand-md navbar-light bg-light border-bottom py-1">
      ${ header() }
    </header>
    <div id="test-container"></div>
    <main></main>
    <footer class="text-center text-lg-start bg-light text-muted border-top text-nowrap">
      ${ footer() }
    </footer>
  `;

  function footer() {
    return html`
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" data-hidden>
        <div class="me-5 d-none d-lg-block">
          <span data-lang="social_media">${ dms.text.social_media }</span>
        </div>
        <div>
          <a href="https://github.com/ccmjs" target="_blank" class="me-4 text-reset">
            <i class="bi bi-github" title="GitHub"></i>
          </a>
          <a href="https://twitter.com/DigiMakerspace" target="_blank" class="me-4 text-reset">
            <i class="bi bi-twitter" title="Twitter"></i>
          </a>
        </div>
      </section>
      <section>
        <div class="container text-center text-md-start pt-4 pb-3">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4 d-flex align-items-center">
                <img class="me-2" alt="${ dms.text.alt_logo_dms }" width="200" height="40" src="${ dms.icon }" data-lang="alt_logo_dms-alt">
              </h6>
              <div class="d-flex align-items-center mb-4">
                <a href="${ dms.text.href_hbrs }" target="_blank" data-lang="href_hbrs-href">
                  <img alt="${ dms.text.alt_logo_hbrs }" height="32" data-lang="alt_logo_hbrs-alt" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQ5NS43ODlweCIgaGVpZ2h0PSIyNjcuNDc1cHgiIHZpZXdCb3g9IjAgMCAxNDk1Ljc4OSAyNjcuNDc1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDk1Ljc4OSAyNjcuNDc1Ig0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJLcmVpc2VfeDVGX2N5YW4iPg0KCTxjaXJjbGUgZmlsbD0iIzAwOUVFMCIgc3Ryb2tlPSIjMDA5RUUwIiBzdHJva2Utd2lkdGg9IjIiIGN4PSI0MDkuNDI1IiBjeT0iMTMyLjg5NiIgcj0iMTA1LjI1NSIvPg0KPC9nPg0KPGcgaWQ9IlNjaHJpZnQiPg0KCTxwYXRoIGQ9Ik03MjQuMjA1LDQ5LjI5NGgxNC4wMDF2MjguMjAyaDI4LjAwMVY0OS4yOTRoMTQuMDAxdjY5LjgwNWgtMTQuMDAxVjg4LjQ5NmgtMjguMDAxdjMwLjYwM2gtMTQuMDAxVjQ5LjI5NHoiLz4NCgk8cGF0aCBkPSJNODE4LjgwNSw2Ni4zOTVjMTUuMzAyLDAsMjcuMDAxLDEwLjMsMjcuMDAxLDI3LjMwMmMwLDE0LjgwMS05Ljg5OSwyNi42MDItMjcuMDAxLDI2LjYwMg0KCQljLTE3LjAwMSwwLTI2LjkwMS0xMS44MDEtMjYuOTAxLTI2LjYwMkM3OTEuOTAzLDc2LjY5NSw4MDMuNjA0LDY2LjM5NSw4MTguODA1LDY2LjM5NXogTTgxOC44MDUsMTA5Ljg5Nw0KCQljMTAuMzAyLDAsMTMtOS4yLDEzLTE3LjgwMWMwLTcuOTAxLTQuMTk5LTE1LjMwMi0xMy0xNS4zMDJjLTguNzAxLDAtMTIuOSw3LjYwMi0xMi45LDE1LjMwMg0KCQlDODA1LjkwNCwxMDAuNTk3LDgwOC42MDQsMTA5Ljg5Nyw4MTguODA1LDEwOS44OTd6Ii8+DQoJPHBhdGggZD0iTTg4OS43MDQsNzguNjk2Yy0yLjQtMS4xLTUtMS45LTkuMTAyLTEuOWMtOC4zLDAtMTMuNjAxLDYuNjAyLTEzLjYwMSwxNi4zMDJjMCw5LjUsNC41LDE2LjgwMSwxMy45MDEsMTYuODAxDQoJCWMzLjgsMCw4LTEuNCwxMC4zMDEtMi40bDAuNiwxMS4xMDJjLTMuODk5LDEuMTk5LTcuOSwxLjY5OS0xMy40LDEuNjk5Yy0xNi45MDEsMC0yNS40MDItMTEuNTAxLTI1LjQwMi0yNy4yMDENCgkJYzAtMTQuOTAxLDguODAxLTI2LjcwMiwyNC45MDItMjYuNzAyYzUuMzk5LDAsOS4zLDAuNiwxMywxLjdMODg5LjcwNCw3OC42OTZ6Ii8+DQoJPHBhdGggZD0iTTkwMC43MDEsNDQuMDk0aDEzLjR2MzAuNTAyaDAuMmMzLjQtNSw5LjItOC4yLDE2LjIwMS04LjJjMTIuMjAxLDAsMTcuNTAxLDguNjAxLDE3LjUwMSwyMC4yMDF2MzIuNTAyaC0xMy40MDFWOTEuNTk3DQoJCWMwLTYuMzAyLTAuMS0xNC44MDItOC42OTktMTQuODAyYy05LjcwMSwwLTExLjgwMiwxMC41MDEtMTEuODAyLDE3LjEwMnYyNS4yMDJoLTEzLjRWNDQuMDk0TDkwMC43MDEsNDQuMDk0eiIvPg0KCTxwYXRoIGQ9Ik05OTIuNDAxLDc4LjM5NmMtNC4xMDEtMS40LTcuMTAyLTIuMi0xMi0yLjJjLTMuNjAxLDAtNy45LDEuMy03LjksNS43MDFjMCw4LjIsMjMuMzAxLDMsMjMuMzAxLDIxLjYwMQ0KCQljMCwxMi4wMDEtMTAuNywxNi44MDEtMjEuNjAxLDE2LjgwMWMtNS4xMDIsMC0xMC4zMDEtMC44OTktMTUuMjAxLTIuMTk5bDAuOC0xMWM0LjIsMi4xLDguNjAyLDMuMzk5LDEzLjIwMSwzLjM5OQ0KCQljMy40LDAsOC44LTEuMyw4LjgtNi4zYzAtMTAuMTAxLTIzLjMwMS0zLjItMjMuMzAxLTIxLjgwMWMwLTExLjEwMiw5LjcwMS0xNi4wMDEsMjAuMjAxLTE2LjAwMWM2LjMsMCwxMC40LDEsMTQuNjAxLDEuODk5DQoJCUw5OTIuNDAxLDc4LjM5NnoiLz4NCgk8cGF0aCBkPSJNMTAzOS42MDEsNzguNjk2Yy0yLjM5OS0xLjEtNS4wMDEtMS45LTkuMTAxLTEuOWMtOC4zMDEsMC0xMy42MDIsNi42MDItMTMuNjAyLDE2LjMwMmMwLDkuNSw0LjUwMSwxNi44MDEsMTMuOSwxNi44MDENCgkJYzMuOCwwLDgtMS40LDEwLjMwMS0yLjRsMC42MDEsMTEuMTAyYy0zLjksMS4xOTktNy45LDEuNjk5LTEzLjQsMS42OTljLTE2LjkwMSwwLTI1LjQwMS0xMS41MDEtMjUuNDAxLTI3LjIwMQ0KCQljMC0xNC45MDEsOC44MDEtMjYuNzAyLDI0LjkwMS0yNi43MDJjNS40LDAsOS4zMDEsMC42LDEzLjAwMSwxLjdMMTAzOS42MDEsNzguNjk2eiIvPg0KCTxwYXRoIGQ9Ik0xMDUwLjU5Nyw0NC4wOTRoMTMuNHYzMC41MDJoMC4yYzMuMzk5LTUsOS4yMDEtOC4yLDE2LjIwMS04LjJjMTIuMjAxLDAsMTcuNTAxLDguNjAxLDE3LjUwMSwyMC4yMDF2MzIuNTAyaC0xMy40VjkxLjU5Nw0KCQljMC02LjMwMi0wLjEwMS0xNC44MDItOC43MDEtMTQuODAyYy05LjcsMC0xMS44MDEsMTAuNTAxLTExLjgwMSwxNy4xMDJ2MjUuMjAyaC0xMy40VjQ0LjA5NEwxMDUwLjU5Nyw0NC4wOTR6Ii8+DQoJPHBhdGggZD0iTTExNTguOTk5LDExOS4wOThoLTEyLjd2LTdoLTAuMTk5Yy00LjEwMiw1LTkuOSw4LjItMTYuOTAxLDguMmMtMTIuMiwwLTE3LjUwMS04LjYwMS0xNy41MDEtMjAuMlY2Ny41OTVoMTMuNHYyNy41MDENCgkJYzAsNi4zLDAuMTAxLDE0LjgwMSw4LjcsMTQuODAxYzkuNywwLDExLjgwMi0xMC41LDExLjgwMi0xNy4xMDJ2LTI1LjJoMTMuMzk5VjExOS4wOThMMTE1OC45OTksMTE5LjA5OHoiLz4NCgk8cGF0aCBkPSJNMTE3My4wOTUsNDQuMDk0aDEzLjQwMXY3NS4wMDVoLTEzLjQwMVY0NC4wOTR6Ii8+DQoJPHBhdGggZD0iTTEyNDEuODk4LDExNi4xOThjLTQuOSwyLjctMTAuNTAyLDQuMTAxLTE3LjcwMSw0LjEwMWMtMTcuMDAxLDAtMjYuOTAxLTkuODAxLTI2LjkwMS0yNi43MDENCgkJYzAtMTQuOTAxLDcuOS0yNy4yMDIsMjMuOTAxLTI3LjIwMmMxOS4xMDEsMCwyNC41MDEsMTMuMTAxLDI0LjUwMSwzMS4xMDJoLTM1LjYwM2MwLjYsOC4zLDYuNCwxMywxNC43LDEzDQoJCWM2LjUwMSwwLDEyLjEwMi0yLjM5OSwxNy4xMDItNS4yTDEyNDEuODk4LDExNi4xOThMMTI0MS44OTgsMTE2LjE5OHogTTEyMzIuODk2LDg4LjI5NmMtMC4zOTgtNi41LTMuMzk5LTEyLjEwMS0xMC44OTktMTIuMTAxDQoJCWMtNy41MDEsMC0xMS4zMDEsNS4yMDEtMTEuOSwxMi4xMDFIMTIzMi44OTZ6Ii8+DQoJPHBhdGggZD0iTTcyNC4yMDUsMTY5LjI5NGgyNC40MDFjOSwwLDIyLjUwMSwyLjYwMSwyMi41MDEsMTcuOTAxYzAsOC4zMDEtNS42MDIsMTQuMTAxLTEzLjkwMSwxNS42MDF2MC4yDQoJCWM5LjUsMC45LDE2LjAwMSw3LjMsMTYuMDAxLDE1LjljMCwxNy42MDItMTUuODAxLDIwLjIwMS0yNC42MDIsMjAuMjAxaC0yNC40MDFMNzI0LjIwNSwxNjkuMjk0TDcyNC4yMDUsMTY5LjI5NHogTTczOC4yMDYsMTk3LjQ5Ng0KCQloNS43YzUuODk5LDAsMTMuMjAxLTEuMywxMy4yMDEtOC41YzAtOC4xMDEtNy4xMDItOC43MDEtMTMuNTAxLTguNzAxaC01LjRWMTk3LjQ5NnogTTczOC4yMDYsMjI4LjA5OGg2LjYNCgkJYzYuNSwwLDE0LjQwMS0xLjYwMSwxNC40MDEtOS43MDFjMC05LjEwMS03LjQtMTAuNS0xNC40MDEtMTAuNWgtNi42VjIyOC4wOTh6Ii8+DQoJPHBhdGggZD0iTTgwNy43MDUsMTg2LjM5NWMxNS4zMDEsMCwyNy4wMDEsMTAuMywyNy4wMDEsMjcuMzAyYzAsMTQuODAxLTkuOSwyNi42MDItMjcuMDAxLDI2LjYwMg0KCQljLTE3LjAwMSwwLTI2LjkwMi0xMS44MDEtMjYuOTAyLTI2LjYwMkM3ODAuODAzLDE5Ni42OTUsNzkyLjUwNCwxODYuMzk1LDgwNy43MDUsMTg2LjM5NXogTTgwNy43MDUsMjI5Ljg5Nw0KCQljMTAuMzAxLDAsMTMtOS4yLDEzLTE3LjgwMWMwLTcuOTAxLTQuMi0xNS4zMDItMTMtMTUuMzAyYy04LjcwMSwwLTEyLjkwMSw3LjYwMi0xMi45MDEsMTUuMzAyDQoJCUM3OTQuODA0LDIyMC41OTgsNzk3LjUwNCwyMjkuODk3LDgwNy43MDUsMjI5Ljg5N3oiLz4NCgk8cGF0aCBkPSJNODQ1LjIwMywxODcuNTk1aDEyLjcwMXY3aDAuMTk5YzQuMi01LjksOS45LTguMiwxNi45MDEtOC4yYzEyLjIwMSwwLDE3LjUwMSw4LjYwMSwxNy41MDEsMjAuMjAxdjMyLjUwMWgtMTMuNHYtMjcuNTAxDQoJCWMwLTYuMzAyLTAuMS0xNC44MDItOC43LTE0LjgwMmMtOS43MDEsMC0xMS44MDIsMTAuNTAxLTExLjgwMiwxNy4xMDJ2MjUuMjAxaC0xMy40VjE4Ny41OTVMODQ1LjIwMywxODcuNTk1eiIvPg0KCTxwYXRoIGQ9Ik05MDYuMzAyLDE4Ny41OTVoMTIuNzAxdjdoMC4yYzQuMi01LjksOS45LTguMiwxNi45LTguMmMxMi4yMDEsMCwxNy41MDIsOC42MDEsMTcuNTAyLDIwLjIwMXYzMi41MDFoLTEzLjQwMXYtMjcuNTAxDQoJCWMwLTYuMzAyLTAuMTAxLTE0LjgwMi04LjctMTQuODAyYy05LjcwMSwwLTExLjgwMSwxMC41MDEtMTEuODAxLDE3LjEwMnYyNS4yMDFoLTEzLjQwMVYxODcuNTk1TDkwNi4zMDIsMTg3LjU5NXoiLz4NCgk8cGF0aCBkPSJNOTY0LjAwMSwyMTcuNjk3di0xMS4wMDFoMjYuMzAydjExLjAwMUg5NjQuMDAxeiIvPg0KCTxwYXRoIGQ9Ik0xMDAwLjcsMTY5LjI5NGgxNS4xMDFjMTUuMDAxLDAsMzIuOTAyLTAuNSwzMi45MDIsMTguOTAxYzAsOC4yMDEtNS41LDE1LjAwMS0xNC40LDE2LjIwMXYwLjJjMy44MDEsMC4zLDYsNC4xLDcuNCw3LjE5OQ0KCQlsMTEuMiwyNy4zMDJoLTE1LjYwMmwtOC4zOTktMjEuODAyYy0yLjAwMS01LjE5OS0zLjgwMi03LjItOS43MDEtNy4yaC00LjV2MjkuMDAxSDEwMDAuN1YxNjkuMjk0eiBNMTAxNC43MDEsMTk5LjA5Nmg0LjYwMQ0KCQljNi45LDAsMTQuODAyLTEsMTQuODAyLTkuNzAxYzAtOC40LTcuODAyLTkuMTAyLTE0LjgwMi05LjEwMmgtNC42MDFWMTk5LjA5NnoiLz4NCgk8cGF0aCBkPSJNMTA2MS44LDE2NC4wOTRoMTMuNHYzMC41MDJoMC4yYzMuMzk5LTUsOS4yMDEtOC4yLDE2LjIwMS04LjJjMTIuMiwwLDE3LjUsOC42MDEsMTcuNSwyMC4yMDF2MzIuNTAxaC0xMy4zOTl2LTI3LjUwMQ0KCQljMC02LjMwMi0wLjEwMS0xNC44MDItOC43MDEtMTQuODAyYy05LjcsMC0xMS44MDEsMTAuNTAxLTExLjgwMSwxNy4xMDJ2MjUuMjAxaC0xMy40VjE2NC4wOTRMMTA2MS44LDE2NC4wOTR6Ii8+DQoJPHBhdGggZD0iTTExNjQuMjAyLDIzNi4xOTdjLTQuOSwyLjcwMS0xMC41MDEsNC4xMDItMTcuNzAxLDQuMTAyYy0xNy4wMDEsMC0yNi45MDEtOS44MDEtMjYuOTAxLTI2LjcwMQ0KCQljMC0xNC45MDEsNy45LTI3LjIwMiwyMy45MDEtMjcuMjAyYzE5LjEwMSwwLDI0LjUwMSwxMy4xMDEsMjQuNTAxLDMxLjEwMkgxMTMyLjRjMC42LDguMyw2LjM5OSwxMy4wMDEsMTQuNjk5LDEzLjAwMQ0KCQljNi41MDEsMCwxMi4xMDItMi4zOTksMTcuMTAzLTUuMjAxVjIzNi4xOTd6IE0xMTU1LjIwMSwyMDguMjk2Yy0wLjM5OS02LjUtMy40LTEyLjEwMS0xMC45LTEyLjEwMXMtMTEuMzAxLDUuMjAxLTExLjg5OSwxMi4xMDENCgkJSDExNTUuMjAxeiIvPg0KCTxwYXRoIGQ9Ik0xMTc4Ljc5OSwxNjUuMzk0aDEzLjQwMXYxMi44MDFoLTEzLjQwMVYxNjUuMzk0eiBNMTE3OC43OTksMTg3LjU5NWgxMy40MDF2NTEuNTAyaC0xMy40MDFWMTg3LjU5NXoiLz4NCgk8cGF0aCBkPSJNMTIwNi4yOTksMTg3LjU5NUgxMjE5djdoMC4xOTljNC4yMDEtNS45LDkuOS04LjIsMTYuOS04LjJjMTIuMjAxLDAsMTcuNTAxLDguNjAxLDE3LjUwMSwyMC4yMDF2MzIuNTAxaC0xMy4zOTl2LTI3LjUwMQ0KCQljMC02LjMwMi0wLjEwMi0xNC44MDItOC43MDEtMTQuODAyYy05LjcsMC0xMS44MDEsMTAuNTAxLTExLjgwMSwxNy4xMDJ2MjUuMjAxaC0xMy40VjE4Ny41OTVMMTIwNi4yOTksMTg3LjU5NXoiLz4NCgk8cGF0aCBkPSJNMTI2My45OTgsMjE3LjY5N3YtMTEuMDAxaDI2LjMwMnYxMS4wMDFIMTI2My45OTh6Ii8+DQoJPHBhdGggZD0iTTEzMzkuMzk5LDE4Mi4wOTVjLTQuNC0xLjktOS4zMDItMy0xNC4yLTNjLTQuODAxLDAtMTEuMDAxLDIuMS0xMS4wMDEsOS42OTljMCwxMi4xMDIsMzAuNjAyLDcsMzAuNjAyLDMwLjQwMg0KCQljMCwxNS4zMDEtMTIuMTAxLDIxLjEwMi0yNi4yLDIxLjEwMmMtNy42MDIsMC0xMS4wMDItMS0xNy45MDEtMi43bDEuMy0xMi42MDJjNC44MDEsMi42MDIsMTAuMzAxLDQuMywxNS44MDIsNC4zDQoJCWM1LjMwMSwwLDEyLjQtMi42OTgsMTIuNC05YzAtMTMuMzAxLTMwLjYwMy03LjgtMzAuNjAzLTMwLjkwMWMwLTE1LjYwMiwxMi4xMDItMjEuMzAyLDI0LjQwMS0yMS4zMDJjNiwwLDExLjYwMSwwLjgwMSwxNi43MDEsMi41DQoJCUwxMzM5LjM5OSwxODIuMDk1eiIvPg0KCTxwYXRoIGQ9Ik0xMzU2LjU5OCwxNjUuMzk0aDEzLjQwMXYxMi44MDFoLTEzLjQwMVYxNjUuMzk0eiBNMTM1Ni41OTgsMTg3LjU5NWgxMy40MDF2NTEuNTAyaC0xMy40MDFWMTg3LjU5NXoiLz4NCgk8cGF0aCBkPSJNMTQyNS40LDIzNi4xOTdjLTQuOSwyLjcwMS0xMC41MDEsNC4xMDItMTcuNzAxLDQuMTAyYy0xNy4wMDEsMC0yNi45MDEtOS44MDEtMjYuOTAxLTI2LjcwMQ0KCQljMC0xNC45MDEsNy45LTI3LjIwMiwyMy45MDEtMjcuMjAyYzE5LjEwMSwwLDI0LjUwMSwxMy4xMDEsMjQuNTAxLDMxLjEwMmgtMzUuNjAzYzAuNjAxLDguMyw2LjQsMTMuMDAxLDE0LjcsMTMuMDAxDQoJCWM2LjUwMSwwLDEyLjEwMy0yLjM5OSwxNy4xMDMtNS4yMDFWMjM2LjE5N0wxNDI1LjQsMjM2LjE5N3ogTTE0MTYuMzk5LDIwOC4yOTZjLTAuMzk5LTYuNS0zLjQtMTIuMTAxLTEwLjktMTIuMTAxDQoJCWMtNy41MDEsMC0xMS4zMDEsNS4yMDEtMTEuOSwxMi4xMDFIMTQxNi4zOTl6Ii8+DQoJPHBhdGggZD0iTTE0ODcsMTg3LjU5NXY0Ni41MDJjMCwxNC4wMDEtNS42MDEsMjcuMi0yNy4yMDEsMjcuMmMtNS4zMDEsMC0xMS40LTAuNzk5LTE3LjgwMi0zLjVsMS4xMDEtMTEuMzk5DQoJCWM0LjEwMSwyLjIsMTAuODAxLDQuNSwxNS4wMDEsNC41YzE0LjgwMiwwLDE1LjUwMS0xMS4xMDEsMTUuNTAxLTIwLjAwMWgtMC4xOTljLTIuNSw0LjM5OS04LjUwMiw4LjItMTYuMDAyLDguMg0KCQljLTE1LjIsMC0yMS0xMi4yLTIxLTI2LjAwMWMwLTEyLjQwMSw2LjM5OS0yNi43MDIsMjEuODAxLTI2LjcwMmM2LjgwMSwwLDEyLjEwMSwyLjMsMTUuODAxLDguMmgwLjJ2LTdMMTQ4NywxODcuNTk1TDE0ODcsMTg3LjU5NXoNCgkJIE0xNDczLjYsMjEyLjc5NmMwLTguOC0zLjM5OS0xNi4wMDEtMTEuMjAxLTE2LjAwMWMtOS4xMDEsMC0xMiw4LjQwMS0xMiwxNi4zMDJjMCw3LjAwMSwzLjcsMTUuNjAxLDExLjQsMTUuNjAxDQoJCUMxNDcwLjE5OSwyMjguNjk3LDE0NzMuNiwyMjEuMzk2LDE0NzMuNiwyMTIuNzk2eiIvPg0KPC9nPg0KPGcgaWQ9IktyZWlzX2lubmVuX3dlaXMiPg0KCTxwYXRoIGZpbGw9IiMwMDlFRTAiIGQ9Ik0xMTYuNSwyNy42NDFjLTU4LjEzLDAtMTA1LjI1NCw0Ny4xMjQtMTA1LjI1NCwxMDUuMjU1YzAsNTguMTMsNDcuMTI0LDEwNS4yNTQsMTA1LjI1NCwxMDUuMjU0DQoJCWM1OC4xMzEsMCwxMDUuMjU1LTQ3LjEyNCwxMDUuMjU1LTEwNS4yNTRDMjIxLjc1NSw3NC43NjQsMTc0LjYzMSwyNy42NDEsMTE2LjUsMjcuNjQxeiBNMTE2Ljg5LDE5NC4yMTINCgkJYy0zNC4zMDUsMC02Mi4xMTUtMjcuODEtNjIuMTE1LTYyLjExNGMwLTM0LjMwNiwyNy44MS02Mi4xMTUsNjIuMTE1LTYyLjExNWMzNC4zMDUsMCw2Mi4xMTUsMjcuODEsNjIuMTE1LDYyLjExNQ0KCQlTMTUxLjE5NSwxOTQuMjEyLDExNi44OSwxOTQuMjEyeiIvPg0KCTxjaXJjbGUgZmlsbD0ibm9uZSIgY3g9IjExNi44OSIgY3k9IjEzMi4wOTciIHI9IjYyLjExNSIvPg0KPC9nPg0KPC9zdmc+DQo=">
                </a>
                <a href="${ dms.text.href_inf }" target="_blank" class="ps-3 text-muted lh-1" data-lang="href_inf-href">
                  <small>
                    <span data-lang="a_department">${ dms.text.a_department }</span>
                    <br>
                    <span data-lang="a_inf">${ dms.text.a_inf }</span>
                  </small>
                </a>
              </div>
              <div class="p-1 rounded bg-white border">
                <img src="${ dms.text.src_bmbf }" data-lang="src_bmbf-src" title="Diese Anwendung wurde mit Mitteln des Bundesministeriums für Bildung und Forschung unter dem Förderkennzeichen 01|S21S56 gefördert. Die Verantwortung für den Inhalt dieser Anwendung liegt bei dem Entwickler André Kless.">
              </div>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4" data-lang="links">${ dms.text.links }</h6>
              <p>
                <a href="https://ccmjs.github.io/digital-makerspace/old/2021/" target="_blank" class="text-reset" data-lang="old_dms">Alter Digital Makerspace</a>
              </p>
              <p>
                <a href="https://prototypefund.de/project/digital-makerspace/" target="_blank" class="text-reset">Prototype Fund</a>
              </p>
              <p>
                <a href="https://github.com/ccmjs" class="text-reset" target="_blank" data-lang="for_developers">${ dms.text.for_developers }</a>
              </p>
              <p>
                <a href="mailto:andre.kless@h-brs.de?subject=Digital Makerspace" class="text-reset" data-lang="help">${ dms.text.help }</a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4" data-lang="a_contact">${ dms.text.a_contact }</h6>
              <p>
                <table class="mx-auto mx-md-0">
                  <tr class="align-top">
                    <td>
                      <i class="bi bi-house-door-fill me-3"></i>
                    </td>
                    <td>
                      Hochschule Bonn-Rhein-Sieg<br>
                      Grantham-Allee 20<br>
                      53757 Sankt Augustin
                    </td>
                  </tr>
                </table>
              </p>
              <p>
                <i class="bi bi-envelope-fill me-3"></i>
                <a class="text-reset" href="mailto:andre.kless@h-brs.de?subject=Digital Makerspace">andre.kless@h-brs.de</a>
              </p>
              <p>
                <i class="bi bi-telephone-fill me-3"></i>
                <a class="text-reset" href="tel:+49-2241-865695">+49 2241 865695</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-4 border-top" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2022 Copyright:
        <a class="text-reset fw-bold" href="${ dms.text.href_contact }" target="_blank" data-lang="href_contact-href a_contact">>${ dms.text.a_contact }</a>
        | <a class="text-reset fw-bold" href="${ dms.text.href_disclaimer }" target="_blank" data-lang="href_disclaimer-href a_disclaimer">>${ dms.text.a_disclaimer }</a>
        | <a class="text-reset fw-bold" href="${ dms.text.href_privacy }" target="_blank" data-lang="href_privacy-href a_privacy">>${ dms.text.a_privacy }</a>
      </div>
    `;
  }
}

export function newHeader(active) {
  const user = dms.user.getValue();
  if (user) user.name = dms.user.getUsername();
  const components = user && data.components.arr.filter(component => component.creator === user.name) || [];
  const apps = user && data.apps.arr.filter(app => app.creator === user.name) || [];

  return html`
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap">
    </head>
    <div class="header">
      <div class="container">
        <div class="logo-container">
          <a href="test.html" class="logo-link">
            <img src="https://i.ibb.co/wByGHv0/logo-new.png" alt="Digital Makerspace Logo" class="logo-img">
            <span class="logo-text">Digital Makerspace</span>
          </a>
        </div>
        <div class="nav">
          <ul>
            <li><a class="nav-link nav-link-selber-bauen" ?data-focus-tools=${active === 'tools'} @click=${() => dms.events.onList('tools')}style="color: initial;">Selber Bauen</a></li>
            <li><a class="nav-link nav-link-vorlagen-nutzen" ?data-focus-apps=${active === 'apps'} @click=${() => dms.events.onList('apps')}style="color: initial;">Vorlagen nutzen</a></li>
            <li><a href="#" class="nav-link nav-link-entwickeln"style="color: initial;">Entwickeln</a></li>
          </ul>
        </div>
        <div class="login">
          <nav class="dropdown me-0 my-1 flex-grow-1 d-flex justify-content-end">
            <button class="btn dropdown-toggle d-flex align-items-center px-1 py-0" type="button" id="user" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="me-2" ?data-hidden=${!user}>${user && user.name}</span>
              <img src="${user && user.picture || dms.picture}" alt="${dms.text.alt_picture}" class="rounded" width="32" height="32" data-lang="alt_picture-alt">
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="user">
              <li ?data-hidden=${user}><button class="dropdown-item" type="button" data-lang="btn_login" @click=${dms.events.onLogin}>${dms.text.btn_login}</button></li>
              <li ?data-hidden=${user}><button class="dropdown-item" type="button" data-lang="btn_register" @click=${dms.events.onRegister}>${dms.text.btn_register}</button></li>
              <li ?data-hidden=${!user}>
                <button disabled class="dropdown-item d-flex align-items-center" type="button">
                  <span data-lang="btn_notifications">${dms.text.btn_notifications}</span>
                  <span class="badge rounded-pill bg-danger ms-1">1</span>
                </button>
              </li>
              <li ?data-hidden=${!user}><button disabled class="dropdown-item" type="button" data-lang="btn_profile">${dms.text.btn_profile}</button></li>
              <li ?data-hidden=${!user}><button disabled class="dropdown-item" type="button" data-lang="btn_data">${dms.text.btn_data}</button></li>
              <li ?data-hidden=${!user}>
                <button disabled class="dropdown-item d-flex align-items-center" type="button">
                  <span data-lang="btn_bookmarks">${dms.text.btn_bookmarks}</span>
                  <span class="badge rounded-pill bg-secondary ms-1">1</span>
                </button>
              </li>
              <li ?data-hidden=${!user || !components.length && !apps.length}><hr class="dropdown-divider"></li>
              <li ?data-hidden=${!user || !components.length && !apps.length}><h6 class="dropdown-header" data-lang="header_created">${dms.text.header_created}</h6></li>
              <li ?data-hidden=${!user || !components.length}>
                <button class="dropdown-item hover-bg-tools d-flex align-items-center" type="button" @click=${() => dms.events.onList('tools', { creator: user && user.name })}>
                  <span data-lang="tools">${dms.text.tools}</span>
                  <span class="badge rounded-pill bg-primary ms-1">${components.length}</span>
                </button>
              </li>
              <li ?data-hidden=${!user || !apps.length}>
                <button class="dropdown-item hover-bg-apps d-flex align-items-center" type="button" @click=${() => dms.events.onList('apps', { creator: user && user.name })}>
                  <span data-lang="apps">${dms.text.apps}</span>
                  <span class="badge rounded-pill bg-success ms-1">${apps.length}</span>
                </button>
              </li>
              <li ?data-hidden=${!user || !components.length}>
                <button class="dropdown-item hover-bg-components d-flex align-items-center" type="button" @click=${() => dms.events.onList('components', { creator: user && user.name })}>
                  <span data-lang="components">${dms.text.components}</span>
                  <span class="badge rounded-pill bg-components ms-1">${components.length}</span>
                </button>
              </li>
              <li ?data-hidden=${!user}><hr class="dropdown-divider"></li>
              <li ?data-hidden=${!user}>
                <button disabled class="dropdown-item" type="button">
                  <span data-lang="btn_trash">${dms.text.btn_trash}</span>
                  <span class="badge rounded-pill bg-dark ms-1">1</span>
                </button>
              </li>
              <li ?data-hidden=${!user}><button class="dropdown-item" type="button" data-lang="btn_logout" @click=${dms.events.onLogout}>${dms.text.btn_logout}</button></li>
            </ul>
          </nav>
        </div>
        <div class="mobile-menu">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
  `;
}


/**
 * HTML template for header
 * @param {string} [active] - 'tools', 'apps' or 'developer'
 * @returns {TemplateResult}
 */
export function header( active ) {
  const user = dms.user.getValue(); if ( user ) user.name = dms.user.getUsername();
  const components = user && data.components.arr.filter( component => component.creator === user.name ) || [];
  const apps = user && data.apps.arr.filter( app => app.creator === user.name ) || [];
  return html`
    <div class="container-fluid">
      <button class="btn navbar-brand p-0 my-1" @click=${ dms.events.onHome }>
        <img alt="${ dms.text.alt_logo_dms }" width="32" height="32" src="${ dms.icon }" data-lang="alt_logo_dms-alt">
        <span data-lang="title">${ dms.text.title }</span>
      </button>
      <nav class="my-1 me-auto">
        <button class="btn btn-outline-tools border-0" data-lang="tools" ?data-focus-tools=${ active === 'tools' } @click=${ () => dms.events.onList( 'tools' ) }>${ dms.text.tools }</button>
        <button class="btn btn-outline-apps border-0" data-lang="apps" ?data-focus-apps=${ active === 'apps' } @click=${ () => dms.events.onList( 'apps' ) }>${ dms.text.apps }</button>
        <button disabled class="btn btn-outline-components border-0" data-lang="developer" ?data-focus-developer=${ active === 'developer' } @click=${ () => dms.events.onDeveloper() }>${ dms.text.developer }</button>
      </nav>
      <div class="d-flex align-items-center">
        <nav class="mx-2" id="lang"></nav>
        <nav class="dropdown me-0 my-1 flex-grow-1 d-flex justify-content-end">
          <button class="btn dropdown-toggle d-flex align-items-center px-1 py-0" type="button" id="user" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="me-2" ?data-hidden=${ !user }>${ user && user.name }</span>
            <img src="${ user && user.picture || dms.picture }" alt="${ dms.text.alt_picture }" class="rounded" width="32" height="32" data-lang="alt_picture-alt">
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="user">
            <li ?data-hidden=${ user }><button class="dropdown-item" type="button" data-lang="btn_login" @click=${ dms.events.onLogin }>${ dms.text.btn_login }</button></li>
            <li ?data-hidden=${ user }><button class="dropdown-item" type="button" data-lang="btn-register" @click=${ dms.events.onRegister }>${ dms.text.btn_register }</button></li>
            <li ?data-hidden=${ !user }>
              <button disabled class="dropdown-item d-flex align-items-center" type="button">
                <span data-lang="btn_notifications">${ dms.text.btn_notifications }</span>
                <span class="badge rounded-pill bg-danger ms-1">1</span>
              </button>
            </li>
            <li ?data-hidden=${ !user }><button disabled class="dropdown-item" type="button" data-lang="btn_profile">${ dms.text.btn_profile }</button></li>
            <li ?data-hidden=${ !user }><button disabled class="dropdown-item" type="button" data-lang="btn_data">${ dms.text.btn_data }</button></li>
            <li ?data-hidden=${ !user }>
              <button disabled class="dropdown-item d-flex align-items-center" type="button">
                <span data-lang="btn_bookmarks">${ dms.text.btn_bookmarks }</span>
                <span class="badge rounded-pill bg-secondary ms-1">1</span>
              </button>
            </li>
            <li ?data-hidden=${ !user || !components.length && !apps.length }><hr class="dropdown-divider"></li>
            <li ?data-hidden=${ !user || !components.length && !apps.length }><h6 class="dropdown-header" data-lang="header_created">${ dms.text.header_created }</h6></li>
            <li ?data-hidden=${ !user || !components.length }>
              <button class="dropdown-item hover-bg-tools d-flex align-items-center" type="button" @click=${ () => dms.events.onList( 'tools', { creator: user && user.name } ) }>
                <span data-lang="tools">${ dms.text.tools }</span>
                <span class="badge rounded-pill bg-primary ms-1">${ components.length }</span>
              </button>
            </li>
            <li ?data-hidden=${ !user || !apps.length }>
              <button class="dropdown-item hover-bg-apps d-flex align-items-center" type="button" @click=${ () => dms.events.onList( 'apps', { creator: user && user.name } ) }>
                <span data-lang="apps">${ dms.text.apps }</span>
                <span class="badge rounded-pill bg-success ms-1">${ apps.length }</span>
              </button>
            </li>
            <li ?data-hidden=${ !user || !components.length }>
              <button class="dropdown-item hover-bg-components d-flex align-items-center" type="button" @click=${ () => dms.events.onList( 'components', { creator: user && user.name } ) }>
                <span data-lang="components">${ dms.text.components }</span>
                <span class="badge rounded-pill bg-components ms-1">${ components.length }
              </button>
            </li>
            <li ?data-hidden=${ !user }><hr class="dropdown-divider"></li>
            <li ?data-hidden=${ !user }>
              <button disabled class="dropdown-item" type="button">
                <span data-lang="btn_trash">${ dms.text.btn_trash }</span>
                <span class="badge rounded-pill bg-dark ms-1">1</span>
              </button>
            </li>
            <li ?data-hidden=${ !user }><button class="dropdown-item" type="button" data-lang="btn_logout" @click=${ dms.events.onLogout }>${ dms.text.btn_logout }</button></li>
          </ul>
        </nav>
      </div>
    </div>
  `;
}

export function newHome(active) {
  return html`
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap">
  <div class ="body">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h2 class ="ueberschrift">Kostenlos in wenigen Schritten zur eigenen App - auch ohne Vorkenntnisse!</h2>
          <p class="bietet" >Das bietet der Digital Makerspace:</p>
          <ul class ="fakten" >
            <li>Selber Bauen von Apps- auch ohne Vorkenntnisse!</li>
            <li>Vorlagen zum bauen von Apps</li>
            <li>Entwickeln</li>
          </ul>
        </div>
        <div class="hero-video">
        <p style="font-size: 16px;margin-bottom: 4px;"> Der Makerspace in 3 Minuten erklärt:</p>
          <video poster="https://i.ibb.co/XZD0sMV/thumbnail.png" controls>
            <source src="https://akless.github.io/akless/dms/IntroOERview.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Lege hier los!</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <img src="https://i.ibb.co/TM76gnb/toolbox.png" alt="Selber Bauen Icon" class="static-img">
            <img src="https://i.ibb.co/hdGM1q8/toolbox.gif" alt="Selber Bauen Icon Animated" class="animated-img">
            <h3>Selber Bauen</h3>
            <p>Baue Apps ohne Vorkenntnisse</p>
            <a class="feature-btn" ?data-focus-tools=${ active === 'tools' } @click=${ () => { dms.events.onList('tools'); scrollToTop(); } } >Jetzt bauen!</a>
          </div>
          <div class="feature-card">
            <img src="https://i.ibb.co/QY1DPWS/vorlage.png" alt="Vorlagen Icon" class="static-img">
            <img src="https://i.ibb.co/Ydfm51V/vorlage.gif" alt="Vorlagen Icon Animated" class="animated-img">
            <h3>Vorlagen nutzen</h3>
            <p>Nutze Vorlagen um eine App zu bauen</p>
            <a class="feature-btn" ?data-focus-tools=${ active === 'tools' } @click=${ () => {dms.events.onList( 'apps' ); scrollToTop(); } }>Jetzt Vorlage nutzen!</a>
          </div>
          <div class="feature-card">
            <img src="https://i.ibb.co/rFvGHh6/web-developer.png" alt="Entwickeln Icon" class="static-img">
            <img src="https://i.ibb.co/3Ndfxvg/web-developer.gif " alt="Entwickeln Icon Animated" class="animated-img">
            <h3>Entwickeln</h3>
            <p>Starte mit der Entwicklung</p>
            <a href="#" class="feature-btn">Jetzt entwickeln!</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  `
}


/**
 * HTML template for home section
 * @returns {TemplateResult}
 */
export function home() {
  return html`
    <section id="home_trailer" class="bg-white py-5">
      <div class="container">
        <div class="mb-4 display-4" data-lang="home_slogan">${ dms.text.home_slogan }</div>
        <div class="row">
          <div class="col py-2">
            <video controls src="https://akless.github.io/akless/dms/IntroOERview.mp4" poster="https://ccmjs.github.io/digital-makerspace/resources/img/trailer.jpg" alt="Einführungsvideo" title="Platzhalter für Video" class="img-thumbnail"></video>
          </div>
          <div class="col py-2">
            ${ headline( 'tools', 'home_trailer_tools_title', 'home_trailer_tools_text', 'btn_toolbox' ) }
            ${ headline( 'apps', 'home_trailer_apps_title', 'home_trailer_apps_text', 'btn_explore' ) }
            ${ headline( 'developer', 'home_trailer_developer_title', 'home_trailer_developer_text', 'btn_guide' ) }
          </div>
        </div>
      </div>
    </section>
    ${ section( 'tools', 'home_tools_title', 'home_tools_text', 'btn_toolbox' ) }
    ${ section( 'apps', 'home_apps_title', 'home_apps_text', 'btn_explore' ) }
    ${ section( 'developer', 'home_developer_title', 'home_developer_text', 'btn_guide' ) }
    <section class="bg-more-light py-5 border-top" data-hidden>
      <div class="container text-center">
        <div class="mb-4 display-4" data-lang="home_more_title">${ dms.text.home_more_title }</div>
        <div class="lead mb-4" data-lang="home_more_text">${ dms.text.home_more_text }</div>
        <div class="lead mb-4 text-start">
          <ul>
            <li>Data Cockpit</li>
            <li>Plattformübergreifende Kollaboration in Echtzeit</li>
            <li>Modularer Desktop</li>
            <li>Statistiken</li>
            <li>Lehrende / iOER</li>
            <li><i>ccmjs</i> Webtechnologie</li>
          </ul>
        </div>
      </div>
    </section>
  `;

  function headline( rubric, title, text, button ) {
    const color = rubric === 'developer' ? 'components' : rubric;
    return html`
      <h5><span data-lang="${ title }">${ dms.text[ title ] }</span> &nbsp;<button class="btn btn-outline-${ color } btn-xs" data-lang="${ button }" ?disabled=${ rubric === 'developer' } @click=${ () => dms.events.onList( color ) }>${ dms.text[ button ] }</button></h5>
      <p data-lang="${ text }">${ dms.text[ text ] }</p>
    `;
  }

  function section( rubric, title, text, button ) {
    const color = rubric === 'developer' ? 'components' : rubric;
    return html`
      <section class="bg-${ color }-light py-5 border-top">
        <div class="container text-center">
          <div class="mb-4 display-4" data-lang="${ title }">${ dms.text[ title ] }</div>
          <div class="lead mb-4" data-lang="${ text }">${ dms.text[ text ] }</div>
          <div class="mb-4">
            <video controls poster="https://ccmjs.github.io/digital-makerspace/resources/img/trailer.jpg" alt="Einführungsvideo" title="Platzhalter für Video" class="img-thumbnail"></video>
          </div>
          <div>
            <button class="btn btn-${ color } btn-lg" ?disabled=${ rubric === 'developer' } @click=${ () => dms.events.onList( color ) }>
              <span data-lang="${ button }">${ dms.text[ button ] }</span>
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      <section class="bg-white py-5 border-top">
        <div class="container"></div>
      </section>
    `;
  }

}

/**
 * HTML template for search results
 * @param {string} section - 'tools', 'apps' or 'components'
 * @param {Object} [values] - initial values for input fields
 * @returns {TemplateResult}
 */
export function list( section, values ) {
  return html`

    <!-- Trailer -->
    ${ trailer( section, section, section + '_trailer' ) }

    <!-- Search Controls -->
    ${ metaSearch( section, values ) }

    <!-- Search Results -->
    <section id="search_results" class="container-fluid bg-${ section }-tmp">
      ${ cards( section, values ) }
    </section>

  `;
}

/**
 * HTML template for the trailer of the tools/apps/components section
 * @param {string} section - 'tools', 'apps' or 'components'
 * @param {string} title - trailer title
 * @param {string} text - trailer text
 * @returns {TemplateResult}
 */
function trailer(section, title, text) {
   // Define the image URLs for each section
   const images = {
    tools: 'https://i.ibb.co/mG5m6Kj/Logo-gelb.png',
    apps: 'https://i.ibb.co/4g6b5QP/logo-blau.png',
    components: 'https://i.ibb.co/wByGHv0/logo-new.png'
  };

  // Get the image URL based on the section parameter
  const imageUrl = images[section] || 'https://i.ibb.co/wByGHv0/logo-new.png'; // Default image if section is not found

  return html`
    <section id="trailer" class="border-bottom">
      <div class="container testClass pt-4 pb-2 bg-${title}">
        <div class="row">
          <div class="col">
            <h1 class="banner text-${section}" data-lang="${title}">${dms.text[title]}</h1>
            <p data-lang="${text}" style="color: white; margin-top: 5%; margin-bottom: 8%; font-size: 18px; margin-left: 14%;">${dms.text[text]}</p>
          </div>
          <div class="col">
            <img src="${imageUrl}" alt="Digital Makerspace Logo" class="bannerLogo">
          </div>
          <p style="padding-left:7.7%;color: white;">Die Apps können im Web platziert, mit anderen geteilt und in anderen Apps verwendet werden </p>
        </div>
      </div>
    </section>
  `;
}

/**
 * HTML template for searching metadata
 * @param {string} section - 'tools', 'apps' or 'components'
 * @param {Object} [values] - initial values for input fields
 * @returns {TemplateResult}
 */
function metaSearch(section, values = {}) {
  const options = data[section !== 'apps' ? 'components' : 'apps'].options;
  return html`
    <section id="search_controls" class="bg-${section}-tmp">
      <div class="containerDrop" style="display: flex; justify-content: flex-start; gap: 10px;">
        ${filterBox('title', 'search_title', values.title || '')}
        
        <div class="col" style="flex: 0 0 auto;">
          <label for="section-tool" class="col-form-label" data-lang="search_tool">${dms.text.search_tool}</label>
          <select id="section-tool" style="width: 200px;" class="form-select" @change=${event => dms.events.onToolSearch(section, event.target.value)}>
            <option value="" selected disabled>Kategorie auswählen</option>
            <option value="Quiz">Quiz</option>
            <option value="Bildkarte">Bildkarte</option>
            <option value="PDF-Viewer">PDF-Viewer</option>
            <option value="App-Sammlung">App-Sammlung</option>
            <option value="Lückentext">Lückentext</option>
            <option value="Live-Umfrage">Live-Umfrage</option>
            <option value="Slidecast">Slidecast</option>
            <option value="Parkhaus">Parkhaus</option>
            <option value="plotly">plotly</option>
            <option value="ER-REL-Trainer">ER-REL-Trainer</option>
            <option value="Code-Editor">Code-Editor</option>
            <option value="Multiple Choice">Multiple Choice</option>
          </select>
        </div>
        
        <div class="col" style="flex: 0 0 auto;">
          <label for="section-sort" class="col-form-label" data-lang="search_sort">${dms.text.search_sort}</label>
          <select id="section-sort" style="width: 200px;" class="form-select" @change=${event => dms.events.onSearch(section, 'sort', event.target.value)}>
            <option value="" data-lang="search_sort_abc">${dms.text.search_sort_abc}</option>
            <option value="newest" data-lang="search_sort_newest">${dms.text.search_sort_newest}</option>
            <option value="rating" data-lang="search_sort_rating">${dms.text.search_sort_rating}</option>
            <option value="used" data-lang="search_sort_used" ?data-hidden=${section === 'apps'}>${dms.text.search_sort_used}</option>
          </select>
        </div>
      </div>

      <div class="container">
        <form>
          <div class="row py-2">
          </div>
        </form>
      </div>
    </section>
  `;

  function filterBox(key, title, value) {
    return html`
      <div class="col" style="flex: 0 0 auto;">
        <label for="section-${section}-${key}" class="col-form-label" data-lang="${title}">${dms.text[title]}</label>
        <input type="search" style="width: 200px;" list="section-${section}-${key}-list" multiple autocomplete="off" id="section-${section}-${key}" class="form-control" .value="${value}" @input=${() => dms.events.onSearch(section)}>
        <datalist id="section-${section}-${key}-list">
          ${options[key === 'category' ? 'tags' : key].map(word => html`<option value="${word}">`)}
        </datalist>
      </div>
    `;
  }
}

/**
 * HTML template for search results
 * @param {string} section - 'tools', 'apps' or 'components'
 * @param {Object} [values] - filter and sort values
 * @returns {TemplateResult}
 */
export function cards( section, values ) {
  const meta = data[ section !== 'apps' ? 'components' : section ].arr.filter( meta =>
       ( meta.listed || ( dms.user.getValue() || {} ).key === meta._.creator )
    && ( !values.title    || meta.title  .toLowerCase().includes( values.title  .toLowerCase() ) )
    && ( !values.tool     || meta.tool   .toLowerCase().includes( values.tool   .toLowerCase() ) )
    && ( !values.creator  || meta.creator.toLowerCase().includes( values.creator.toLowerCase() ) )
    && ( !values.category || meta.tags.find( tag => tag.toLowerCase().includes( values.category.toLowerCase() ) ) )
  ).sort( ( a, b ) => {
    switch ( values.sort ) {
      case 'rating':
        const type = section.slice( 0, -1 );
        return ( a.app ? b.rating - a.rating : b.rating[ type ] - a.rating[ type ] )
          || ( Object.keys( b.app ? b.ratings : b.ratings[ section ] ).length - Object.keys( a.app ? a.ratings : a.ratings[ section ] ).length );
      case 'used':
        return b.apps - a.apps;
      case 'newest':
        return new Date( b.created_at ) - new Date( a.created_at );
      default:
        return a.title < b.title ? -1 : ( a.title > b.title ? 1 : 0 );
    }
  } );
  return html`
    <div class="container-fluid p-2">
      <div class="d-flex justify-content-center flex-wrap">
        ${ repeat( meta, meta => meta.key, meta => card( meta ) ) }
      </div>
    </div>
  `;

  function card( meta ) {
    const item = section.slice( 0, -1 );
    const rating = section === 'apps' ? meta.rating : meta.rating[ item ];
    const ratings = section === 'apps' ? meta.ratings : meta.ratings[ section ];
    return html`
      <div class="p-2">
        <div class="card h-100 " @click=${ () => {dms.events.onItem( item, meta.key ); scrollToTop(); } }>
          <div class="card-header d-flex p-3 ">
           <img class="me-3" src="${ meta.icon || dms.icon }" width="50" height="50" alt="${ dms.text[ 'alt_' + item ] }" data-lang="alt_${ item }-alt">
            <div class="overflow-hidden">
              <h5 class="card-title mb-0">${ meta.title }</h5>
              <span class="badge rounded-pill bg-tools-light text-dark" title="${ dms.text.tooltip_tool }" data-lang="tooltip_tool-title" ?data-hidden=${ !meta.app }>${ meta.tool }</span>
            </div>
          </div>
          <div class="card-body py-2">${ meta.subject }</div>
          <div class="card-footer d-flex justify-content-between text-nowrap">
            <small class="d-flex align-items-center" ?data-hidden=${ section === 'tools' }>
              <img src="${ dms.picture }" alt="${ dms.text.alt_user }" class="rounded me-1" width="18" height="18" data-lang="alt_user-alt">
              ${ meta.creator }
            </small>
            <small class="px-1 bg-apps-light rounded" title="${ dms.text.tooltip_apps }" data-lang="tooltip_apps-title" ?data-hidden=${ section !== 'tools' }>
              ${ meta.apps }
              <span data-lang="apps">${ dms.text.apps }</span>
            </small>
            <small>
              <span class="text-${ section }" title="${ dms.text[ 'tooltip_rating_' + item ] }" data-lang="tooltip_rating_${ item }-title">
                ${ [ 1, 2, 3, 4, 5 ].map( star => html`<i class="bi bi-star${ star <= rating ? '-fill' : ( star < rating + 1 ? '-half' : '' ) }"></i> ` ) }
              </span>
              <span title="${ dms.text.tooltip_ratings }" data-lang="tooltip_ratings-title">(${ Object.keys( ratings ).length })</span>
            </small>
          </div>
        </div>
      </div>
    `;
  }
}

/**
 * HTML template for tool/app/component section
 * @param {string} section - 'tool', 'app' oder 'component'
 * @param {string|string[]} meta_key - metadata key
 * @returns {TemplateResult}
 */
export function item( section, meta_key ) {
  const color = section + 's';
  const meta = data[ section !== 'app' ? 'components' : 'apps' ].meta[ meta_key ];
  if ( !meta ) return html``;
  const date_format = dms.lang.translate( 'date_format' );
  const created_at = new Date( meta.created_at ).toLocaleDateString( date_format, { year: 'numeric', month: 'long', day: 'numeric' } );
  const updated_at = new Date( meta.updated_at ).toLocaleDateString( date_format, { year: 'numeric', month: 'long', day: 'numeric' } );
  const is_creator = meta._.creator === ( dms.user.getValue() || {} ).key;
  const creator = ( section === 'app' ? 'author' : 'developer' );
  let code = data.components.meta[ meta_key ];
  if ( code ) code = code.code || code.path;
  return html`
    <div id="item" class="bg-${ color }-light p-2 pb-3">
      ${ breadcrumb( color, [
        { title: `<span data-lang="${ section + 's' }">${ dms.text[ section + 's' ] }</span>`, onClick: () => dms.events.onList( section + 's' ) },
        { title: meta.title }
      ], 'sm' ) }
      <div class="container sm bg-white rounded border mb-4">
        
        <!-- Trailer -->
        <section class="container trailer">
          <div class="row">
            <div class="col">
              <div class="d-flex my-3">
                <div class="flex-shrink-0">
                  <img src="${ meta.icon || dms.icon }" width="64" height="64" alt="${ dms.text[ 'alt_' + section ] }" data-lang="alt_${ section }-alt">
                </div>
                <div class="flex-grow-1 ms-3">
                  <h5 class="mb-0">${ meta.title }</h5>
                  <div>
                    <span class="badge rounded-pill bg-${ color }" data-lang="${ section }">${ dms.text[ section ] }</span>
                    <span class="badge rounded-pill bg-tools-light text-dark pointer" title="${ dms.text.tooltip_tool }" data-lang="tooltip_tool-title" ?data-hidden=${ section !== 'app' } @click=${ () => dms.events.onItem( 'tool', meta.component ) }>${ meta.tool }</span>
                    <span class="badge rounded-pill bg-light text-dark" data-lang="meta_private" ?data-hidden=${ meta._.access.get !== 'creator' }>${ dms.text.meta_private }</span>
                    <span class="badge rounded-pill bg-light text-dark" data-lang="meta_not_listed" ?data-hidden=${ meta.listed || meta._.access.get === 'creator' }>${ dms.text.meta_not_listed }</span>
                    <span class="badge rounded-pill bg-light text-dark" data-lang="meta_public" ?data-hidden=${ !is_creator || !meta.listed || meta._.access.get === 'creator' }>${ dms.text.meta_public }</span>
                  </div>
                  <button class="btn btn-outline-secondary btn-xs mt-2" data-lang="meta_edit" ?data-hidden=${ !is_creator } @click=${ () => dms.events.onEdit( section, meta.key ) }>${ dms.text.meta_edit }</button>
                </div>
              </div>
            </div>
              <div class="col d-flex justify-content-start align-items-end my-3 btn-pos btn-posEnd">
                ${is_creator ? html`<p class="mb-0 me-3">Super, deine App ist fertig!</p>` : ''}
                    <button class="btn btn-outline-${ color } btn-lg" ?data-hidden=${ section === 'component' } @click=${ () => dms.events.onStart( section, meta.key ) }>
                      <span data-lang="${ is_creator ? 'app_show' : 'template_show' }">
                        ${ 
                          section === 'tool' ? 'App erstellen' :
                          section === 'app' ? (is_creator ? 'App anzeigen' : 'Vorlage anzeigen') :
                          section === 'component' ? 'Komponente anzeigen' :
                          'App anzeigen'
                        }
                      </span>
                      <i class="bi bi-chevron-right"></i>
                    </button>
                <a class="btn btn-outline-${ color } btn-lg ms-2" href="${ code }" target="_blank" ?data-hidden=${ section !== 'component' }>
                  <span data-lang="${ section + '_start' }">${ dms.text[ section + '_start' ] }</span><i class="bi bi-chevron-right"></i>
                </a>
              </div>
          </div>
        </section>
      

      
        <!-- Beschreibung -->
        <section class="container py-3" ?data-hidden=${ !meta.description }>
          <h6 class="text-decoration-underline" data-lang="meta_description">${ dms.text.meta_description }</h6>
          <p class="text-muted mb-0">${ unsafeHTML( meta.description ) }</p>
        </section>
      </div>
      <div class="container sm bg-white rounded border">
        <!-- Informationen -->
        <section class="container py-3">
          <h6 class="text-decoration-underline" data-lang="meta_infos">${ dms.text.meta_infos }</h6>
          <small>
            <table class="table">
              <tbody>
              
                <!-- Tool Title -->
                <tr ?data-hidden=${ section !== 'tool' }>
                  <th scope="row" data-lang="meta_title">${ dms.text.meta_title }</th>
                  <td>
                    <button class="btn btn-link btn-xs text-decoration-none" title="${ dms.text.tooltip_tool_apps }" data-lang="tooltip_tool_apps-title" @click=${ () => dms.events.onList( 'apps', { tool: meta.title } ) }>${ meta.title }</button>
                  </td>
                </tr>
                
                <!-- App Title -->
                <tr ?data-hidden=${ section !== 'app' }>
                  <th scope="row" data-lang="meta-title">${ dms.text.meta_title }</th>
                  <td>
                    ${ meta.title }
                  </td>
                </tr>
                
                <!-- App created with Tool -->
                <tr ?data-hidden=${ section !== 'app' }>
                  <th scope="row" data-lang="tool">${ dms.text.tool }</th>
                  <td>
                    <button class="btn btn-link btn-xs text-decoration-none" title="${ dms.text.tooltip_tool_apps }" data-lang="tooltip_tool_apps-title" @click=${ () => dms.events.onList( 'apps', { tool: meta.tool } ) }>${ meta.tool }</button>
                  </td>
                </tr>
                
                <!-- Component URL -->
                <tr ?data-hidden=${ section !== 'component' }>
                  <th scope="row" data-lang="meta_url">${ dms.text.meta_url }</th>
                  <td>
                    <a href="${ meta.path }" target="_blank">${ meta.path }</a>
                  </td>
                </tr>
                
                <!-- Creator -->
                <tr>
                  <th scope="row" data-lang="meta_${ creator }">${ dms.text[ 'meta_' + creator ] }</th>
                  <td>
                    <button class="btn btn-link btn-xs text-decoration-none" title="${ dms.text[ 'tooltip_creator_' + section + 's' ] }" data-lang="tooltip_creator_${ section }s-title" @click=${ () => dms.events.onList( section + 's', { creator: meta.creator } ) }>${ meta.creator }</button>
                  </td>
                </tr>
                
                <!-- Tags -->
                <tr>
                  <th scope="row" data-lang="meta_categories">${ dms.text.meta_categories }</th>
                  <td>
                    ${ meta.tags.map( ( tag, i ) => html`${ i ? html`<i class="bi bi-dot"></i>` : '' }<button class="btn btn-link btn-xs text-decoration-none" title="${ dms.text[ 'tooltip_category_' + section + 's' ] }" data-lang="tooltip_category_${ section }s-title" @click=${ () => dms.events.onList( section + 's', { category: tag } ) }>${ tag }</button>` ) }
                  </td>
                </tr>

                <!-- Content Licence -->
                <tr ?data-hidden=${ section !== 'app' }>
                  <th scope="row" data-lang="meta_licence_content">${ dms.text.meta_licence_content }</th>
                  <td>
                    ${ meta.agree.content ? html`<a href="${ dms.text.a_licence_content }" target="_blank" title="${ dms.text.tooltip_licence_content }" data-lang="a_licence_content-href tooltip_licence_content-title meta_licence_cc0" ?data-hidden=${ !meta.agree.content }>${ dms.text.meta_licence_cc0 }</a>` : html`-` }
                  </td>
                </tr>
                
                <!-- Software Licence -->
                <tr>
                  <th scope="row" data-lang="meta_licence_software">${ dms.text.meta_licence_software }</th>
                  <td>
                    ${ meta.agree.software ? html`<a href="${ dms.text.a_licence_software }" target="_blank" title="${ dms.text.tooltip_licence_software }" data-lang="a_licence_software-href tooltip_licence_software-title meta_licence_mit">${ dms.text.meta_licence_mit }</a>` : html`-` }
                  </td>
                </tr>
                
                <!-- Publish Date -->
                <tr>
                  <th scope="row" data-lang="meta_created_at">${ dms.text.meta_created_at }</th>
                  <td class="timestamp">${ created_at }</td>
                </tr>
                
                <!-- Last Update -->
                <tr>
                  <th scope="row" data-lang="meta_updated_at">${ dms.text.meta_updated_at }</th>
                  <td class="timestamp">${ created_at === updated_at ? '-' : updated_at }</td>
                </tr>
              </tbody>
            </table>
          </small>
        </section>

        <!-- Rating -->
        <section id="rating" class="container py-3" ?data-hidden=${ is_creator }>
          <h6 class="text-decoration-underline" data-lang="meta_rating">${ dms.text.meta_rating }</h6>
          <article>${ rating( section, meta.key ) }</article>
        </section>

        <!-- Comments -->
        <section class="container py-3">
          <h6 class="text-decoration-underline" data-lang="meta_comments">${ dms.text.meta_comments }</h6>
          <article id="comments"></article>
        </section>
        
      </div>
    </div>
  `;
}

/**
 * HTML template for a breadcrumb
 * @param {string} color - 'tools', 'apps' or 'components'
 * @param {Array.<{title:string,onClick:Function}>} entries - breadcrumb entries
 * @param {string} [size] - maximum width, example 'sm'
 * @returns {TemplateResult}
 */
function breadcrumb( color, entries, size ) {
  return html`
    <div id="breadcrumb" class="container px-0${ size ? ' ' + size : '' }">
      <small>
        <nav class="d-flex align-items-center flex-wrap mt-2">
          <span class="mb-1" data-lang="breadcrumb">${ dms.text.breadcrumb }</span>
          <span class="d-flex flex-wrap">
            ${ entries.map( ( entry, i ) => html`
              <div>
                <i class="bi bi-caret-right-fill mb-1" ?data-hidden=${ !i }></i><button class="btn btn-xs${ entry.onClick ? ' text-' + color : '' }" @click=${ entry.onClick }>${ unsafeHTML( entry.title ) }</button>
              </div>
            ` ) }
          </span>
        </nav>
      </small>
    </div>
  `;
}

/**
 * HTML template for rating of an tool/app/component
 * @param {string} type - 'tool', 'app' or 'component'
 * @param {string|string[]} meta_key - metadata key
 * @returns {TemplateResult}
 */
export function rating( type, meta_key ) {
  const color = type + 's';
  const meta = data[ type !== 'app' ? 'components' : 'apps' ].meta[ meta_key ];
  const ratings = type === 'app' ? meta.ratings : meta.ratings[ type + 's' ];
  const rating = ratings[ ( dms.user.getValue() || {} ).key ];
  return html`
    <span class="text-${ color }" title="${ dms.text.tooltip_rating }" data-lang="tooltip_rating-title">
      ${ [ 1, 2, 3, 4, 5 ].map( star => html`<i class="bi star bi-star${ star <= rating ? '-fill' : '' }" @click=${ () => dms.events.onRating( type, meta_key, star ) }></i>` ) }
    </span>
  `;
}

/**
 * HTML template for edit metadata
 * @param {string} type - 'tool', 'app', or 'component'
 * @param {string|string[]} meta_key - metadata key of the edited tool/app/component
 * @returns {TemplateResult}
 */
export function edit( type, meta_key ) {
  const meta = data[ type !== 'app' ? 'components' : 'apps' ].meta[ meta_key ];
  const color = type + 's';
  return html`
    <div class="bg-${ color }-light p-2 pb-3">
      ${ breadcrumb( color, [
        { title: `<span data-lang="${ color }">${ dms.text[ color ] }</span>`, onClick: () => dms.events.onList( color ) },
        { title: meta.title, onClick: () => dms.events.onItem( type, meta.key ) },
        { title: `<span data-lang="meta_edit">${ dms.text.meta_edit }</span>` }
      ] ) }
      <section class="container bg-white border p-4">
        <form id="form" @submit=${ event => { event.preventDefault(); dms.events.onEditSubmit( type, meta_key ); } }>
          ${ inputs( type, meta_key ) }
        </form>
      </section>
      <div class="container px-0 py-3 d-flex justify-content-between">
        <button class="btn btn-secondary" title="${ dms.text[ 'tooltip_back_' + type ] }" data-lang="tooltip_back_${ type }-title" @click=${ () => dms.events.onItem( type, meta.key ) }>
          <i class="bi bi-chevron-left"></i>
          <span data-lang="btn_back">${ dms.text.btn_back }</span>
        </button>
        <button type="submit" class="btn btn-${ color }" form="form" data-lang="btn_save">${ dms.text.btn_save }</button>
        <button class="btn btn-danger" @click=${ () => dms.events.onDelete( type, meta.key ) }>
          <i class="bi bi-trash-fill"></i>
          <span data-lang="btn_delete">${ dms.text.btn_delete }</span>
        </button>
      </div>
    </div>
  `;
}

/**
 * HTML template for metadata inputs
 * @param {string} type - 'tool', 'app', or 'component'
 * @param {string|string[]} [meta_key] - metadata key of the edited tool/app/component
 * @returns {TemplateResult}
 */
export function inputs( type, meta_key ) {
  const meta = data[ type !== 'app' ? 'components' : 'apps' ].meta[ meta_key ] || {};
  const is_private = meta._ && meta._.access.get === 'creator';
  let tmp = null;
  return html`
    <div class="alert alert-info" role="alert" data-lang="meta_hint">${ dms.text.meta_hint }</div>
    <div>
      <label for="form-title" class="form-label mb-1">
        <span data-lang="meta_title">${ dms.text.meta_title }</span>: <small class="text-danger">*</small>
      </label>
      <input type="text" name="title" class="form-control" id="form-title" required .value=${ meta.title || '' }>
    </div>
    <div class="mt-3">
      <label for="form-icon" class="form-label mb-1">
        <span data-lang="meta_icon">${ dms.text.meta_icon }</span>:
      </label>
      <input type="url" name="icon" class="form-control" id="form-icon" .value=${ meta.icon || '' }>
    </div>
    <div class="mt-3">
      <label for="form-subject" class="form-label mb-1">
        <span data-lang="meta_subject">${ dms.text.meta_subject }</span>:
      </label>
      <input type="text" name="subject" class="form-control" id="form-subject" .value=${ meta.subject || '' }>
    </div>
    <div class="mt-3">
      <label class="form-label mb-1">
        <span data-lang="meta_detailed_description">${ dms.text.meta_detailed_description }</span>:
      </label>
      <div id="form-description"></div>
    </div>
    <div class="mt-3">
      <label class="form-label mb-1">
        <span data-lang="meta_categories">${ dms.text.meta_categories }</span>:
      </label>
      <div id="form-tags"></div>
    </div>
    <div class="mt-3">
      <div class="form-label mb-1">
        <span data-lang="meta_visibility">${ dms.text.meta_visibility }</span>:
        <small class="text-danger">*</small>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="visibility" id="form-visibility-public" value="public" ?checked=${ meta_key && !is_private && meta.listed } @click=${ onClick }>
        <label class="form-check-label" for="form-visibility-public"><span class="badge rounded-pill bg-secondary" data-lang="meta_public">${ dms.text.meta_public }</span></label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="visibility" id="form-visibility-not_listed" value="not_listed" ?checked=${ meta_key && !is_private && !meta.listed } @click=${ onClick }>
        <label class="form-check-label" for="form-visibility-not_listed"><span class="badge rounded-pill bg-secondary" data-lang="meta_not_listed">${ dms.text.meta_not_listed }</span></label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="visibility" id="form-visibility-private" value="private" required ?checked=${ meta_key && is_private } @click=${ onClick }>
        <label class="form-check-label" for="form-visibility-private"><span class="badge rounded-pill bg-secondary" data-lang="meta_private">${ dms.text.meta_private }</span></label>
      </div>
    </div>
    <div class="mt-3" id="form-agree" ?data-hidden=${ !meta_key || is_private }>
      <div class="form-label mb-1">
        <span data-lang="meta_agree">${ dms.text.meta_agree }</span>:
      </div>
      <div class="form-check" ?data-hidden=${ type !== 'app' }>
        <input class="form-check-input" type="checkbox" name="agree.content" id="form-agree-content" ?required=${ type === 'app' } ?checked=${ meta.agree && meta.agree.content }>
        <label class="form-check-label" for="form-agree-content">
          <small data-lang="meta_agree_content">${ dms.text.meta_agree_content }</small>
          <small class="text-danger">*</small>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="agree.software" id="form-agree-software" required ?checked=${ meta.agree && meta.agree.software }>
        <label class="form-check-label" for="form-agree-software">
          <small data-lang="meta_agree_software">${ dms.text.meta_agree_software }</small>
          <small class="text-danger">*</small>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="agree.copyright" id="form-agree-copyright" required ?checked=${ meta.agree && meta.agree.copyright }>
        <label class="form-check-label" for="form-agree-copyright">
          <small data-lang="meta_agree_copyright">${ dms.text.meta_agree_copyright }</small>
          <small class="text-danger">*</small>
        </label>
      </div>
    </div>
    <div class="mt-3">
      <small>
        <span class="text-danger">*</span>
        <span data-lang="meta_required">${ dms.text.meta_required }</span>
      </small>
    </div>
  `;

  function onClick( event ) {
    const form = event.target.closest( 'form' );
    const agree = form.querySelector( '#form-agree' );
    if ( agree )
      delete agree.dataset.hidden;
    if ( event.target.value === 'private' )
      agree && agree.parentNode.replaceChild( document.createElement( 'aside' ), tmp = agree );
    else if ( tmp ) {
      const aside = form.querySelector( 'aside' );
      aside.parentNode.replaceChild( tmp, aside );
      tmp = null;
    }
  }
}

/**
 * HTML template for the app editor of a tool
 * @param {Object} tool_key - metadata key of the tool
 * @param {Object} [app_key] - metadata key of the reused app
 * @returns {TemplateResult}
 */
export function editor( tool_key, app_key ) {
  const tool_meta = data.components.meta[ tool_key ];
  const app_meta = app_key && data.apps.meta[ app_key ];
  const is_creator = app_meta && app_meta._.creator === ( dms.user.getValue() || {} ).key;
  return html`
    <div class="bg-tools-light p-2 pb-3">
      ${ breadcrumb( 'tools', [
        { title: `<span data-lang="tools">${ dms.text.tools }</span>`, onClick: () => dms.events.onList( 'tools' ) },
        { title: tool_meta.title, onClick: () => dms.events.onItem( 'tool', tool_key ) },
        { title: `<span data-lang="editor">${ dms.text.editor }</span>` }
      ] ) }
      <section class="container px-0 pb-1">
        <alert class="alert alert-dark small mb-2 px-2 py-0 d-flex align-items-center" role="alert" ?data-hidden=${ !app_key }>
          <span data-lang="${ is_creator ? 'alert_edit' : 'alert_template' }">${ dms.text[ is_creator ? 'alert_edited' : 'alert_template' ] }</span>
          <i class="bi bi-arrow-right ps-1"></i>
          <button class="btn btn-sm text-apps px-1 py-0" @click=${ () => dms.events.onStart( 'app', app_key ) }>${ ( app_meta || {} ).title }</button>
        </alert>
      </section>
      <section id="editor" class="container bg-white border p-0"></section>
      <nav class="container px-0 py-2 d-flex justify-content-between flex-wrap">
        <button class="btn btn-secondary text-nowrap m-1" title="${ dms.text.tooltip_back_tool }" data-lang="tooltip_back_tool-title" @click=${ () => dms.events.onItem( 'tool', tool_key ) }>
          <i class="bi bi-chevron-left"></i>
          <span data-lang="btn_back">${ dms.text.btn_back }</span>
        </button>
        <button class="btn btn-apps text-nowrap m-1" title="${ dms.text.tooltip_save }" data-lang="tooltip_save-title" ?data-hidden=${ !is_creator } @click=${ () => dms.events.onSave( app_meta.key ) }>
          <span data-lang="btn_save_app">${ dms.text.save_app }</span>
        </button>
        <button class="btn btn-tools text-nowrap m-1" title="${ dms.text.tooltip_create }" data-lang="tooltip_create-title" ?data-hidden=${ is_creator } @click=${ () =>{ dms.events.onCreate( tool_key ); scrollToTop(); } }>
          <span data-lang="btn_last_step">${ dms.text.btn_last_step }</span>
        </button>
        <button class="btn btn-light text-nowrap m-1 disabled" title="tooltip_take" data-lang="tooltip_take-title" ?data-hidden=${ !is_creator } @click=${ () => dms.events.onTake }>
          <i class="bi bi-share"></i>
          <span data-lang="btn_take">${ dms.text.btn_take }</span>
        </button>
        <button class="btn btn-info text-nowrap m-1" title="${ dms.text.tooltip_preview }" data-lang="tooltip_preview-title" @click=${ () => dms.events.onPreview( tool_key ) }>
          <span data-lang="btn_preview">${ dms.text.btn_preview }</span>
          <i class="bi bi-chevron-right"></i>
        </button>
      </nav>
    </div>
  `;
}

/**
 * HTML template for create app metadata
 * @param {string|string[]} [tool_key] - metadata key of the used tool
 * @returns {TemplateResult}
 */
export function create( tool_key ) {
  return html`
    <div class="bg-tools-light p-2 pb-3">
      ${ breadcrumb( 'tools', [
        { title: `<span data-lang="tools">${ dms.text.tools }</span>`, onClick: () => dms.events.onList( 'tools' ) },
        { title: data.components.meta[ tool_key ].title, onClick: () => dms.events.onItem( 'tool', tool_key ) },
        { title: `<span data-lang="editor">${ dms.text.editor }</span>`, onClick: () => dms.events.onStart( 'tool', tool_key, true ) },
        { title: `<span data-lang="btn_create_app">${ dms.text.btn_create_app }</span>` }
      ] ) }
      <section class="container bg-white border p-4">
        <form id="form" @submit=${ event =>{ { event.preventDefault(); dms.events.onCreateSubmit( tool_key ); scrollToTop(); }} }>
          ${ inputs( 'app' ) }
        </form>
      </section>
      <div class="container px-0 py-3 d-flex justify-content-between">
        <button class="btn btn-secondary" @click=${ () => {dms.events.onStart( 'tool', tool_key, true ); scrollToTop(); } }>
          <i class="bi bi-chevron-left"></i>
          <span data-lang="btn_back">${ dms.text.btn_back }</span>
        </button>
        <button type="submit" class="btn btn-tools" form="form" data-lang="btn_create_app">${ dms.text.btn_create_app }</button>
        <button data-invisible>_____</button>
      </div>
    </div>
  `;
}

/**
 * HTML template for app preview
 * @param {Object} tool_key - metadata key of the used tool
 * @returns {TemplateResult}
 */
export function preview( tool_key ) {
  const tool_meta = data.components.meta[ tool_key ];
  return html`
    <div class="bg-tools-light p-2 pb-3">
      ${ breadcrumb( 'tools', [
        { title: `<span data-lang="tools">${ dms.text.tools }</span>`, onClick: () => dms.events.onList( 'tools' ) },
        { title: tool_meta.title, onClick: () => dms.events.onItem( 'tool', tool_key ) },
        { title: `<span data-lang="editor">${ dms.text.editor }</span>`, onClick: () => dms.events.onStart( 'tool', tool_key, true ) },
        { title: `<span data-lang="btn_preview">${ dms.text.btn_preview }</span>` }
      ] ) }
      <section id="preview" class="container bg-white border p-0"></section>
      <div class="container px-0 py-3 d-flex justify-content-between">
        <button class="btn btn-secondary" @click=${ () => dms.events.onStart( 'tool', tool_key, true )}>
          <i class="bi bi-chevron-left"></i>
          <span title="${ dms.text.tooltip_back_editor }" data-lang="btn_back tooltip_back_editor-title">${ dms.text.btn_back }</span>
        </button>
        <button data-invisible>_____</button>
        <button data-invisible>_____</button>
      </div>
    </div>
  `;
}

/**
 * HTML template for show an app
 * @param {Object} app_key - metadata key of the app
 * @returns {TemplateResult}
 */
export function show( app_key ) {
  const app_meta = data.apps.meta[ app_key ];
  const is_creator = app_meta._.creator === ( dms.user.getValue() || {} ).key;
  return html`
    <div class="bg-apps-light p-2 pb-3">
      ${ breadcrumb( 'apps', [
        { title: `<span data-lang="apps">${ dms.text.apps }</span>`, onClick: () => dms.events.onList( 'apps' ) },
        { title: app_meta.title, onClick: () => dms.events.onItem( 'app', app_meta.key ) },
        { title: `<span data-lang="show">${ dms.text.show }</span>` }
      ] ) }
      <div class="container bg-white border px-0" id="app"></div>
      <div class="container px-0 py-3 d-flex flex-wrap justify-content-between text-nowrap">
        <button class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#modal" ?data-invisible="${ !dms.handover }">
          <i class="bi bi-share"></i>
          <span data-lang="btn_share">${ dms.text.btn_share }</span>
        </button>
                <button class="btn btn-primary mb-2" @click=${ () => dms.events.onStart( 'tool', app_meta.component, app_meta.key ) }>
          <span data-lang="${ is_creator ? 'btn_edit' : 'btn_template' }">${ dms.text[ is_creator ? 'btn_edit' : 'btn_template' ] }</span>
          <i class="bi bi-chevron-right"></i>
        </button>
        <button class="btn btn-info mb-2 mx-2" disabled>
          <i class="bi bi-bar-chart-line"></i>
          <span data-lang="btn_results">${ dms.text.btn_results }</span>
        </button>
      </div>
    </div>
    <div class="modal" id="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" data-lang="handover">${ dms.text.handover }</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="handover"></div>
        </div>
      </div>
    </div>
  `;
}

/**
 * HTML template for register section
 * @returns {TemplateResult}
 */
export function register() {
  return html`
    <section class="bg-white py-5 border-top">
      <div class="container text-center" style="width: 33em">
        <div class="mb-4 display-4" data-lang="register_title">${ dms.text.register_title }</div>
        <div class="lead mb-4" data-lang="register_text">${ dms.text.register_text }</div>
        <div class="lead mb-4 text-start">
          <form id="register_form" @submit=${ event => { event.preventDefault(); dms.events.onRegisterSubmit(); } }>
            <div class="mb-3">
              <label for="register_name" class="form-label" data-lang="register_name">${ dms.text.register_name }</label>
              <input type="text" name="name" class="form-control" id="register_name" required>
              <div class="form-text" data-lang="register_name_help">${ dms.text.register_name_help }</div>
            </div>
            <div class="mb-3">
              <label for="register_username" class="form-label" data-lang="register_username">${ dms.text.register_username }</label>
              <input type="text" name="username" pattern="[a-z]+" class="form-control" id="register_username" required>
              <div class="form-text" data-lang="register_username_help">${ dms.text.register_username_help }</div>
            </div>
            <div class="mb-3">
              <label for="register_password" class="form-label" data-lang="register_password">${ dms.text.register_password }</label>
              <input type="password" name="password" class="form-control" id="register_password" required>
              <div class="form-text" data-lang="register_password_help">${ dms.text.register_password_help }</div>
            </div>
            <button type="submit" class="btn btn-primary" data-lang="register_submit">${ dms.text.register_submit}</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function test() {
  return html`
    <h1>XDDDDD</h1>
  `
}
