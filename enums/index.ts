export enum Translations {
  AUTH = "auth",
  MAIN = "main",
  COMMON = "common",
}

export enum Routes {
  ABOUT = "/about-us",
  pill_LIST = "/book-list",
  AUTHOR = "/author/:authorId",
  ACCOUNT = "/account",
  PILL_CONTENT = "/pill/:pillId/content",
  PILL_DETAILS = "/pill/:bookId",
  PILL_REQUEST = "/pill-request",
  CATEGORIES = "/categories",
  CATEGORY_BOOKS = "/categories/:categoryId/:categoryName",
  CONTACT = "/contact",
  DASHBOARD = "/dashboard",
  EMAIL_CHANGE = "/email-change",
  HOME = "/",
  LIBRARY = "/library",
  LOGIN = "/login",
  LOGOUT = "/logout",
  NEWEST_BOOKS = "/newest-books",
  POPULAR_BOOKS = "/popular-books",
  PASSWORD_CHANGE = "/password-change",
  PASSWORD_RESET = "/password-reset",
  PAYMENTS = "/payments",
  PRICING = "/pricing",
  RECENTLY_ADDED_BOOKS = "/recently-added-books",
  REGISTER = "/registration",
  SEARCH = "/search",
  SHORTEN_FOR_PREMIUM = "/shorten-for-premium",
  TRENDING = "/trending",
  USERNAME_FORGET = "/username-forget",
  PRIVACY_POLICY = "/privacy-policy",
  STATUTE = "/statute",
  RODO = "/rodo",
}

export enum Breakpoints {
  MOBILE = 576,
  TABLET = 768,
  BIG_TABLET = 992,
  LAPTOP = 1200,
}

export enum Alerts {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
  NONE = "none",
}

export enum AuthModals {
  LOGIN_OR_REGISTER = "login_or_register",
  PASSWORD_FORGET = "password_forget",
  NONE = "none",
}
