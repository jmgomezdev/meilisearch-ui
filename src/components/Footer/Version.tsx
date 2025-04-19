import { Tooltip } from "@douyinfe/semi-ui";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import packageJson from "../../../package.json";
const appVersion = packageJson.version;
const meilisearchJSVersion = packageJson.dependencies.meilisearch.replace(
	/[^\d.]/g,
	"",
);


export const Version: FC = () => {
	const { t } = useTranslation();
	const gitHash = "unknown";

	return (
		<span className="flex items-center gap-4">
			<span className="text-nowrap">
				{t("common:version")}: {appVersion}
				{`[${gitHash.slice(0, 7)}]`}
			</span>
			<Tooltip content={t("footer:meilisearchVersionTip")}>
				<span className="text-nowrap">
					{t("footer:meilisearchJSInUse")}: {meilisearchJSVersion}
				</span>
			</Tooltip>
		</span>
	);
};
