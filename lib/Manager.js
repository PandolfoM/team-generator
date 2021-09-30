class Manager {
  constructor(name = "", id, email, officeNum) {
    this.job = "Manager";
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNum = officeNum;
  }

  getStats() {
    return {
      job: this.job,
      name: this.name,
      id: this.id,
      email: this.email,
      officeNum: this.officeNum,
    };
  }

  generateHTML() {
    return `
    <section class="hero is-small is-danger">
      <div class="hero-body">
        <p class="title has-text-centered">
          My Team
        </p>
      </div>
    </section>
    <div class="columns">
      <div class="column is-offset-2">
        <h4 class="has-text-weight-bold">
          <i class="fas fa-mug-hot"></i>
          ${this.name}
        </h4>
        <h5 class="has-text-weight-bold">${this.job}</h5>
        <p>ID: ${this.id}</p>
        <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
        <p>Office Number: ${this.officeNum}</p>
      </div>
    `;
  }
}

module.exports = Manager;
