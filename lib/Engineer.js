class Engineer {
  constructor(name = "", id, email, github) {
    this.job = "Engineer";
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  generateHTML() {
    return `
    <div class="column is-offset-2">
      <h4 class="has-text-weight-bold">
        <i class="fas fa-glasses"></i>
        ${this.name}
      </h4>
      <h5 class="has-text-weight-bold">${this.job}</h5>
      <p>ID: ${this.id}</p>
      <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
      <p>GitHub: <a href="https://github.com/${this.github}">${this.github}</a></p>
    </div>
    `;
  }
}

module.exports = Engineer;
