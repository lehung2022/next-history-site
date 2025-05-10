// src/client-components/sub/domain-links.ts
import { DomainLinks } from "@/types/domain-links";

export const domainLinks: DomainLinks = {
  imageSources: [
    {
      label: "My Google Drive",
      url: "https://drive.google.com/drive/folders/1ndZhok50LHEek2dbu4hajY2A_5p2XIkq?dmr=1&ec=wgc-drive-globalnav-goto",
    },
    { label: "Nobuwiki", url: "https://www.nobuwiki.org/" },
  ],
  articleSources: [
    // The article sources will not be from these two links. I am currently lazy, so I am leaving them as that. They will be changed in the future
    {
      label: "Nguồn bài viết",
      url: "https://drive.google.com/drive/folders/1ndZhok50LHEek2dbu4hajY2A_5p2XIkq?dmr=1&ec=wgc-drive-globalnav-goto",
    },
    {
      label: "Lịch sử Nhật Bản và Trung Quốc",
      url: "https://drive.google.com/drive/folders/1ndZhok50LHEek2dbu4hajY2A_5p2XIkq?dmr=1&ec=wgc-drive-globalnav-goto",
    },
  ],
};

// This file has been changed to "source-links.ts"
