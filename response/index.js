const content = {
  response: null,
  result: null,
};

const setContent = (response, result) => {
  switch (response) {
    case 404:
      content.response = response;
      content.result = "Not Found";
      break;
    case 400:
      content.response = response;
      content.result = "Bad Request";
      break;
    case 401:
      content.response = response;
      content.result = "Not Authorized";
      break;
    case 500:
      content.response = response;
      content.result = { message: "Internal Server Error", error: result };
      break;
    default:
      content.response = response;
      content.result = result;
  }
};

const getContent = () => content;

export default {
  setContent,
  getContent,
};
