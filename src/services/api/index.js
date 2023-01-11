const API = process.env.NEXT_PULIC_API_URL;
const VERSION = process.env.NEXT_PULIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/v1/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit = 10, offset = 1) => `${API}/${VERSION}/products?limit=${limit}&offset=${offset}`,
    postProducts: `${API}/api/${VERSION}/products/`,
    putProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    putCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName) => `${API}/api/${VERSION}/${fileName}`,
  },
};

export default endPoints;

//nuestra libreria, para exportar la api a  nuestro proyecto.
