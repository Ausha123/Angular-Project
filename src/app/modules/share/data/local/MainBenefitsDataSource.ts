import MainBenefitsDTO from "../../dto/core/MainBenefitsDTO";

export default class MainBenefitsDataSource {
  getAllData(): Array<MainBenefitsDTO> {
    return [
      new MainBenefitsDTO('paid', 'Provide 20% of the project\'s initial cost', 'When the development process is completed, we reimburse our customer for 20 percent of the project\'s initial cost.'),
      new MainBenefitsDTO('gavel', 'Assume complete responsibility for the project', 'If there are any technical issues with the project at any point throughout the process or after it has been completed, we assume full responsibility for the entire project.'),
      new MainBenefitsDTO('bolt', 'Rapid development', 'Our development team is committed to providing our clients with a rapid development process that is also of excellent quality.'),
      new MainBenefitsDTO('wallet', 'Flexible payment plans', 'We  have a passion for high-quality products and ethical principles, therefore we constantly put the needs of our customers first. As a result, we offer a variety of convenient payment options.'),
      new MainBenefitsDTO('loyalty', 'One year  free after service', 'Following the conclusion of the project, we provide our clients with a complimentary after-service. There, we are in charge of software maintenance.')
    ];
  }
}
