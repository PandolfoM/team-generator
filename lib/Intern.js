class Intern {
  constructor(name = "", id, email, school) {
    this.job = "Intern";
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  generateHTML() {
    return `
    <div class="column is-offset-2">
      <h4 class="has-text-weight-bold">
        <i class="fas fa-user-graduate"></i>
        ${this.name}
      </h4>
      <h5 class="has-text-weight-bold">${this.job}</h5>
      <p>ID: ${this.id}</p>
      <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
      <p>School: ${this.school}</p>
    </div>
    `;
  }
}

module.exports = Intern;
