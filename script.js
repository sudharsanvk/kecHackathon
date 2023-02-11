const textEle = document.getElementById('text');
const imgEle = document.getElementById('output');
const progressEle = document.getElementById('progress');

const logger = ({ progress }) =>
  (progressEle.innerHTML = `${(progress * 100).toFixed(2)}%`);

// Create Image to text using main
const startConversion = async (url) => {
  try {
    const result = await Tesseract.recognize(url, 'eng', { logger });
    const {
      data: { text },
    } = result;
    return text;
  } catch (e) {
    console.error(e);
  }
};

const onCovert = async () => {
  const urlEle = document.getElementById('url');
  const text = await startConversion(urlEle.value);
  textEle.innerHTML = text;
};

// Create Image to text using worker better way
const worker = Tesseract.createWorker({
  logger,
});
const imageToText = async (url) => {
  try {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const {
      data: { text },
    } = await worker.recognize(url);
    await worker.terminate();
    textEle.innerHTML = text;
  } catch (error) {}
};

const onImageChange = (file) => {
  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      let url = reader.result;
      imgEle.src = url;
      imageToText(url);
    };
  }
};
