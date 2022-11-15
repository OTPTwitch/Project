let Emails = new Array(); let BlackList = new Array();
Emails = ['wqekj1232@gmail.com', 'ejwkjlm@yandex.ru', 'directorschool@mail.ru', 'uchitel@mail.ru', 'uchitelhistory@mail.ru'];
BlackList = ['wqekj1232@gmail.com', 'ejwkjlm@yandex.ru'];
console.log("Зарегестрированные Email:\n" + Emails.join(" - ") );
console.log("Чёрный список:\n" + BlackList.join(" - ") );
filter(Emails, BlackList);
function filter(AllEmails, BlackList) {for (let i = 0; i < AllEmails.length; ++i) {for (let n = 0; n < BlackList.length; n++) {if (AllEmails[i] == BlackList[n]) {AllEmails.splice(i, 1); --i;}}}
console.log("Доступные Email:\n" + AllEmails.join(" - ")); }