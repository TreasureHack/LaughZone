export async function list(){
    const rawBody = await fetch("https://www.reddit.com/r/funnyvideos/.json");
    let data = (await rawBody?.json()).data.children;
    let data2 = {};
    data.forEach(({data}, i) => {
        const { title, author, thumbnail, media: { reddit_video: { fallback_url: url } } } = data;
        data2[i] = {title, author, url, thumbnail};
    });
    return data2;
}