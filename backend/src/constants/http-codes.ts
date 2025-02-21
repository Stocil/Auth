// 200
export const HTTP_NO_CONTENT = 204; // Если нет содержимого, просто положительный ответ

// 400
export const HTTP_NO_BODY_PROVIDED = 400; // Если нет тела запроса
export const HTTP_UNAUTHORIZE = 401; // Если нет access токена, либо он не валиден
export const HTTP_CONFLICT = 409; // Если пользователь с таким логином уже существует
export const HTTP_INVALID_DATA = 422; // Если какие-то данные неверны
