export default class Cloudinary {
  #name = "dp6ovp6ka";
  #unsignedPresetName = "jbzmryry";
  #baseUrl = `https://api.cloudinary.com/v1_1/${this.#name}/image/upload`;
  async uploadImage(filesList) {
    const formData = new FormData();

    for (let i = 0; i < filesList.length; i++) {
      let file = filesList[i];
      formData.append("file", file);
      formData.append("upload_preset", this.#unsignedPresetName);
    }
    const result = await fetch(this.#baseUrl, {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
        return result.url;
      });
    return result;
  }
}
