import dayjs from "dayjs"

export const getPostPermalink = (post) => {
  const date = dayjs(post.datetime);

  return `/${date.year()}/${String(date.month()).padStart(2, '0')}/${post.slug}`;
}
