/**
 * @description URL Constant class with all APIs urls declaration
 * @memberof UrlConstants.
 */
class UrlConstants {
  constructor() {
    //Application Site URL
    //this.SiteUrl = process.env.REACT_APP_SITE_URL ;
    this.LoginUrl = "http://52.16.69.240:3000/api/admin/login";
    this.AuthUrl = "http://52.16.69.240:3000/api/admin/auth";
    this.Languages = " http://52.16.69.240:3000/api/label/get-language";
    this.LanguageOperations = "http://52.16.69.240:3000/api/label/add-language";

    this.LanguageDelete = "http://52.16.69.240:3000/api/label/delete-language/";
  }
}

export default new UrlConstants();
