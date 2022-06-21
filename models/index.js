//********Categories********

export async function getCategories() {
  console.log("test cats");
}
export async function getCategoryById(){
  console.log("category search by id will be routed routed here");
}
/*

//This code will be refactored so that we have create, update and delete routes for each component

export function createBook(book) {
  books.push(book);
  return books[books.length - 1];
}

export function updateBookById(id, updates) {
  const foundIndex = books.findIndex(function (book) {
    return book.id === id;
  });
  books[foundIndex] = updates;
  return books[foundIndex];
}

export function deleteBookById(id) {
  const foundIndex = books.findIndex(function (book) {
    return book.id === id;
  });
  const item = books[foundIndex];
  books.splice(foundIndex, 1);
  return item;
}
*/


//SubCategories
export async function getSubCategories() {
  console.log("test sub cats");
}

export async function getSubCategoryById(){
  console.log("SubCategory search by id will be routed routed here");
}




//*********Comments*********

export async function getComments() {
  console.log("test comment");
}

export async function getCommentsById() {
  console.log("this is where we will see specific comments via their id");
}
//assuming array/table name is comment
export function createComment(comment) {
  comments.push(comment);
  return comments[comment.length - 1];
}

//**********Posts***********

export async function getPosts() {
  console.log("test post");
}

export async function getPostsById() {
  console.log("this is where posts will be shown via id");
}

//*******Credentials********

export async function getCredentials() {
  console.log("test creds");
}

export async function getCredentialsById() {
  console.log("this is where user credentials will be shown via id");
}