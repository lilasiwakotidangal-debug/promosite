export default function Loading() {
  return (
    <main className="page loadingPage" aria-label="Loading page">
      <div className="pageSkeleton">
        <div className="skeletonHero" />
        <div className="skeletonContent">
          <div className="skeletonLine skeletonLineShort" />
          <div className="skeletonLine skeletonLineWide" />
          <div className="skeletonGrid">
            <div className="skeletonCard" />
            <div className="skeletonCard" />
            <div className="skeletonCard" />
          </div>
        </div>
      </div>
    </main>
  );
}
