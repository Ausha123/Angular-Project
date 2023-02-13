import ProvidedSoftwareDTO from "../../dto/core/ProvidedSoftwareDTO";

export default class ProvideDataSource {
  getAllData():Array<ProvidedSoftwareDTO>{
    return [
      new ProvidedSoftwareDTO('phone_iphone','https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg','Mobile  Application'),
      new ProvidedSoftwareDTO('travel_explore','https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg','Web App Application'),
      new ProvidedSoftwareDTO('desktop_windows','https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg','Desktop Application'),
      new ProvidedSoftwareDTO('memory','https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg','Embedded    Systems'),
      new ProvidedSoftwareDTO('home_max_dots','https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg','IOT Systems'),
      new ProvidedSoftwareDTO('sports_esports','https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg','Mobile        Games')
    ];
  }
}
