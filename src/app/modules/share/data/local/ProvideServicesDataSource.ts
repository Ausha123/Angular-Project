import ProvidedServicesDTO from "../../dto/core/ProvidedServicesDTO";

export default class ProvideServicesDataSource {
  getAllData(): Array<ProvidedServicesDTO> {
    return [
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 01', 'Web App Application Development'),
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 02', 'Mobile Application Development'),
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 03', 'Cloud Computing'),
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 04', 'DevOps Automation'),
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 05', 'Software Prototyping'),
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 06', 'Quality Assurance'),
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 07', 'Business Analysing'),
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 08', 'Software Testing'),
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 09', 'IT Consultation'),
      new ProvidedServicesDTO('', 'https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg', 'Service 10', 'Application Deployment'),
    ];
  }
}
