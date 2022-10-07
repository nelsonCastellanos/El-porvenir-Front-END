export async function getList(): Promise<any> {
    const data = await fetch('http://localhost:8000/api/v2/pages/?type=cms_home_page.HomePage&fields=slider,secciones&format=json');
    return await data.json();
  }

  export async function getProducts(): Promise<any> {
    const data = await fetch('http://localhost:8000/products');
    return await data.json();
  }