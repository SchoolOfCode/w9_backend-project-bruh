import { query } from "../db/index.js";

// ************** Create Request **************************************
export async function createPost(req) {
    const [ user_id, sub_category_id, username, title, content ] =
    [ Number(req.body.user_id), Number(req.body.sub_category_id), 
    req.body.username, req.body.title, req.body.content ];
    
    const result = await query(`
        INSERT INTO posts 
        (user_id, sub_category_id, username, title, content, post_date, upvote, pinned)
        VALUES 
        ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, 0, FALSE) 
        RETURNING *;`,
        [user_id, sub_category_id, username, title, content]
    );
    return result.rows;
};

// ************** Get Requests **************************************
export async function getAllPosts() {
    const result = await query(`
    SELECT * FROM posts
    ORDER BY post_id DESC;`);
    return result.rows;
};

export async function getPostsByUser(username) {
    const result = await query(`
        SELECT * FROM posts
        WHERE username ILIKE  $1
        ORDER BY post_date DESC;
    `, 
    [username]);     
    return result.rows;
};

export async function getPostsByMostLiked() {
    const result = await query(`
        SELECT * FROM posts
        ORDER BY upvote DESC;
    `);
    return result.rows;
};

export async function getPostsChronological() {
    const result = await query(`
        SELECT * FROM posts
        ORDER BY post_date  DESC;`)
    return result.rows;
};

export async function getPostsReverseChronological() {
    const result = await query(`
        SELECT * FROM posts
        ORDER BY post_date ASC;`)
    return result.rows;
};

// ************** Update Requests **************************************
export async function editPost(post_id, title, content) {
    const result = await query(`
        UPDATE posts
        SET title = $1, content = $2
        WHERE post_id = $3;`,
        [title, content, post_id]);
    return result.command;
};


export async function incrementUpvote(post_id) {
    const result = await query(`
        UPDATE posts
        SET upvote = upvote + 1 
        WHERE post_id = $1;`, 
        [post_id]);
    return result.command;
};

export async function pinPost(post_id) {
    const result = await query(`
        UPDATE posts
        SET pinned = TRUE
        WHERE post_id = $1
        RETURNING *;`,
        [post_id]);
    return result.command
};

export async function unPinPost(post_id) {
    const result = await query(`
        UPDATE posts
        SET pinned = FALSE
        WHERE post_id = $1
        RETURNING *;`,
        [post_id]);
    return result.command;
};

// ************** Delete Request **************************************
export async function deletePost(post_id) {
    const result = await query(`
        DELETE FROM posts
        WHERE post_id = $1;`, 
        [post_id]);
    if (result.rowCount === 0) {
        return `No post found with ID: ${post_id}`;
    };
    return result.command;
};