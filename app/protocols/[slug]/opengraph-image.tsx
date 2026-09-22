import { ImageResponse } from "next/og";
import { getProtocol } from "@/content/protocols";
import { stageBySlug } from "@/content/stages";
import type { StageSlug } from "@/content/types";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stageColor: Record<StageSlug, string> = {
  "before-surgery": "#1F5C7A",
  "during-surgery": "#2E6E9E",
  "after-surgery": "#46748C",
  "measure-improve": "#6A5B8A",
};

export async function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const protocol = getProtocol(params.slug);
  return [
    {
      id: params.slug,
      size,
      contentType,
      alt: protocol
        ? `${protocol.title} — VetSSI Protocol ${protocol.protocolNumber}`
        : "VetSSI",
    },
  ];
}

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const protocol = getProtocol(params.slug);

  if (!protocol) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0C2340",
            color: "#fff",
            fontSize: 72,
            letterSpacing: "0.18em",
          }}
        >
          VETSSI
        </div>
      ),
      size,
    );
  }

  const stage = stageBySlug[protocol.stage];
  const accent = stageColor[protocol.stage];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C2340",
          padding: 72,
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <div style={{ width: 20, height: 20, background: accent }} />
            <div
              style={{
                fontSize: 24,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#9BB4C9",
              }}
            >
              {stage.title} · Protocol {protocol.protocolNumber} of 12
            </div>
          </div>

          <div
            style={{
              fontSize: 68,
              lineHeight: 1.1,
              maxWidth: 960,
              fontWeight: 500,
            }}
          >
            {protocol.title}
          </div>

          <div
            style={{
              fontSize: 28,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.68)",
              maxWidth: 900,
              marginTop: 28,
            }}
          >
            {protocol.summary}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 30, letterSpacing: "0.18em" }}>VETSSI</div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.5)" }}>
            {protocol.practices.length} practices · The Mosaic of SSI Prevention
          </div>
        </div>
      </div>
    ),
    size,
  );
}
