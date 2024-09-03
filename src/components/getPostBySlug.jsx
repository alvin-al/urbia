import React from "react";

export async function getStaticPaths() {
  const res = await fetch(
    "https://cdn.contentful.com//spaces/sqxv0civ01pv/environments/master/entries?access_token=wekw2CK9mPbeQHI1Rkfbud8RdEdZUVZFNR237jE97JI"
  );
  const data = await res.json();

  const paths = data.items.map((entry) => ({
    params: { slug: entry.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    "https://cdn.contentful.com//spaces/sqxv0civ01pv/environments/master/entries?access_token=wekw2CK9mPbeQHI1Rkfbud8RdEdZUVZFNR237jE97JI"
  );
  const entry = await res.json();

  return {
    props: {
      entry,
    },
  };
}
