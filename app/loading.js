function SkeletonChip() {
  return <span className="loadingChip shimmerBlock" aria-hidden="true" />;
}

export default function Loading() {
  return (
    <main className="page pageLoading" aria-busy="true" aria-live="polite">
      <section className="loadingHeroCard">
        <div className="loadingHeroCopy">
          <span className="loadingEyebrow shimmerBlock" />
          <span className="loadingTitleLine loadingTitleLineLg shimmerBlock" />
          <span className="loadingTitleLine loadingTitleLineMd shimmerBlock" />
          <span className="loadingBodyLine shimmerBlock" />
          <span className="loadingBodyLine loadingBodyLineShort shimmerBlock" />

          <div className="loadingButtonRow">
            <span className="loadingButton shimmerBlock" />
            <span className="loadingButton shimmerBlock" />
          </div>

          <div className="loadingChipRow">
            <SkeletonChip />
            <SkeletonChip />
            <SkeletonChip />
          </div>
        </div>

        <div className="loadingVisualCard shimmerPanel">
          <span className="loadingVisualOrb loadingVisualOrbOne" />
          <span className="loadingVisualOrb loadingVisualOrbTwo" />
          <span className="loadingVisualPlate shimmerBlock" />
        </div>
      </section>

      <section className="loadingGridSection">
        <div className="loadingGridHeader">
          <span className="loadingSectionLabel shimmerBlock" />
          <span className="loadingSectionTitle shimmerBlock" />
        </div>

        <div className="loadingCardGrid">
          <article className="loadingCard shimmerPanel">
            <span className="loadingCardMedia shimmerBlock" />
            <span className="loadingCardLine loadingCardLineTitle shimmerBlock" />
            <span className="loadingCardLine shimmerBlock" />
            <span className="loadingCardLine loadingCardLineShort shimmerBlock" />
          </article>
          <article className="loadingCard shimmerPanel">
            <span className="loadingCardMedia shimmerBlock" />
            <span className="loadingCardLine loadingCardLineTitle shimmerBlock" />
            <span className="loadingCardLine shimmerBlock" />
            <span className="loadingCardLine loadingCardLineShort shimmerBlock" />
          </article>
          <article className="loadingCard shimmerPanel">
            <span className="loadingCardMedia shimmerBlock" />
            <span className="loadingCardLine loadingCardLineTitle shimmerBlock" />
            <span className="loadingCardLine shimmerBlock" />
            <span className="loadingCardLine loadingCardLineShort shimmerBlock" />
          </article>
        </div>
      </section>
    </main>
  );
}
