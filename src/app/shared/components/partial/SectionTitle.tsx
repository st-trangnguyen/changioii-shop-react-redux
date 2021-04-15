/* eslint-disable no-unused-vars */
import React from 'react';

declare namespace SectionTitleNamespace {
  interface Props {
    mainTitle: string,
    subTitle: string
  }
}

const SectionTitle = (title: SectionTitleNamespace.Props) => {
  return(
    <div className="section-title text-center pd-5">
      <h2 className="title mb-5 txt-xxl">{ title.mainTitle }</h2>
      <h4 className="sub-title txt-lg txt-secondary pt-5">{ title.subTitle }</h4>
    </div>

  );
};

export default SectionTitle;
