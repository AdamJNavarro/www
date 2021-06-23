import { CenteredColumn, Page, PageHeader } from "~/components/layout";
import { DancePerformance, dances } from "~/data/dances";

export default function DancingPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            subtitle="If there's a dance floor, you'll find me on it."
            title="Dancing"
          />

          <div className="space-y-6">
            <h3 className="font-sans text-lg font-black md:text-xl text-black dark:text-gray-200">
              Performances
            </h3>
            <div className="space-y-12">
              {dances.map((dance: DancePerformance) => {
                const { song, videoUrl, posterUrl } = dance;
                return (
                  <div key={song}>
                    <div className="aspect-w-16 aspect-h-9">
                      <video
                        controls
                        controlsList="nodownload nofullscreen"
                        disablePictureInPicture
                        disableRemotePlayback
                        key={`${song}-video`}
                        playsInline
                        poster={posterUrl}
                      >
                        <source src={videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  );
}
