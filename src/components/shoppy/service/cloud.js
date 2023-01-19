export default class Cloudinary {
  #name = "dp6ovp6ka";
  #unsignedPresetName = "jbzmryry";
  resouceType = "image" | "video" | "raw" | "auto";
  #baseUrl = `https://api.cloudinary.com/v1_1/${this.#name}/${
    this.resouceType
  }/upload`;
  constructor() {}
  async upload(filesList) {
    const formData = new FormData();

    for (let i = 0; i < filesList.length; i++) {
      let file = filesList[i];
      formData.append("file", file);
      formData.append("upload_preset", this.#unsignedPresetName);
    }
    const data = await fetch(this.#baseUrl, {
      method: "POST",
      body: formData,
    });
    return data.json();
  }
}
