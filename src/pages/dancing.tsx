import { CenteredColumn, Page, PageHeader } from "~/components/layout"

import { dances } from "~/data/dances"

export default function DancingPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-12">
          <PageHeader
            title="Dancing"
            subtitle="If there's a dance floor, you'll find me on it."
          />

          <div className="space-y-6">
            <h3 className="font-sans text-lg font-black md:text-xl text-black dark:text-gray-200">
              Performances
            </h3>
            <div className="space-y-12">
              {dances.map((dance) => {
                return (
                  <div key={dance.song} className="aspect-w-16 aspect-h-9">
                    <video
                      playsInline
                      controls
                      controlsList="nodownload nofullscreen"
                      disablePictureInPicture
                      disableRemotePlayback
                      key={`${dance.song}-video`}
                      poster={dance.posterUrl}
                    >
                      <source src={dance.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
