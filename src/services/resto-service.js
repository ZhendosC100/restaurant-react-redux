export default class RestoService {

  getResoures = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch src/db.json` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  getMenuItems = async () => {
    return await this.getResoures('/menu');
  }
}