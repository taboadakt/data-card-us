import React from "react";
import {
  Gauge,
  CodeStatusTypes,
  GaugeTypes,
  Title,
  FormattedDate,
} from "@viasat/vci-components";
import {
  Card,
  CardHeaderContainer,
  CardTitle,
  CardGrayContainer,
  CardBody,
} from "../components/Card";
import { EOLocale } from "eo-locale";

export default function DataCard(props) {
  const data = { used: 87, total: 100 };
  const days = { used: 27, total: 30 };
  return (
    <Card>
      <CardHeaderContainer>
        <CardTitle>My Data Usage</CardTitle>
        <CardBody>
          {data.used} GB used / {days.total - days.used} days remaining
        </CardBody>
      </CardHeaderContainer>
      <CardGrayContainer>
        <Gauge
          status={CodeStatusTypes.Active}
          total={data.total}
          remaining={data.used - data.total}
          gaugeType={GaugeTypes.Data}
          dataUnit="GB"
        />
        <div style={{ marginTop: 20 }}>
          <Gauge
            status={CodeStatusTypes.Active}
            total={24}
            remaining={12}
            gaugeType={GaugeTypes.Time}
            timeUnit="hour"
          />
        </div>
      </CardGrayContainer>
    </Card>
  );
}
