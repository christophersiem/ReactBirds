export default async function fetchData(){
    const response = await fetch("https://api.jsonbin.io/b/5ee9d0a6ccc9877ac37d5c96");
    const data = await response.json();
    console.log(data);
    return data;
}