import { CMS_URL } from "../consts";

const random = (Math.random() + 1).toString(36).substring(7);
const res = await fetch(`${CMS_URL}/wp-json/cms/v1/posts?rand=${random}`);

export default await res.json();
