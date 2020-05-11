import React from "react"
export default () => (
  <footer class="footer">
    <div class="container">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            © {new Date().getFullYear()}, Built with&nbsp;
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.cristianperezmatturro.com/en"
            >
              In English
            </a>
          </div>
          <div class="level-item is-hidden-mobile">|</div>
          <div class="level-item">
            <a
              target="_blank"   
              rel="noopener"
              href="https://www.cristianperezmatturro.com/es"
            >
              En Español
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
