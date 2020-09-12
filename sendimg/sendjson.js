const obj = {
  hello: "world"
};
const json = JSON.stringify(obj);
const blob = new Blob([json], {
  type: 'application/json'
});
const data = new FormData();
data.append("document", blob);
axios({
  method: 'post',
  url: '/sample',
  data: data,
})