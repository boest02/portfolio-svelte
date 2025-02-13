
export async function getBlogPost(path: string) {
    let blogPost: string = '';

    await fetch(path)
        .then(response => response.text())
        .then(text => {
            blogPost = text;
        })
        .catch(error => {
            console.error(error);
        });

    return blogPost;
}