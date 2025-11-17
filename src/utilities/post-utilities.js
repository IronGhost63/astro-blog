import dayjs from 'dayjs';

export const getPermalink = ( post ) => {
  const postDate = dayjs( post.date );

  const year = String(postDate.get('year'));
  const month = String(postDate.get('month') + 1).padStart(2, '0');
  const slug = post.slug;

  return `/${year}/${month}/${slug}`;
}

export const getFeaturedImage = ( post ) => {
  const { _embedded: media  } = post;

  if ( !Object.hasOwn( media, 'wp:featuredmedia' ) ) {
    return false;
  }

  return media['wp:featuredmedia'].at(0).source_url;
}
