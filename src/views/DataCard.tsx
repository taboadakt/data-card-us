import React, { useEffect, useState } from "react";
import {
  Gauge,
  CodeStatusTypes,
  GaugeTypes,
  Button,
  ButtonSizes,
} from "@viasat/vci-components";
import {
  Card,
  CardHeaderContainer,
  CardTitle,
  CardGrayContainer,
  CardBody,
  CardContainer,
} from "../components/Card";
// @ts-ignore
import { events, state } from "@ktaboada/api";

export default function DataCard(props) {
  const { eventBus } = props;
  const { data, days } = state;
  const [totalData, setTotalData] = useState(data.total);

  useEffect(() => {
    const subscription = eventBus.subscribe(events.getUsage, () => {
      setTotalData(state.data.total);
    });
    // Specify how to clean up after this effect:
    return function cleanup() {
      subscription.unsubscribe();
    };
  });

  return (
    <CardContainer>
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
            total={totalData}
            remaining={totalData - data.used}
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
          <div style={{ marginTop: 20 }}>
            <Button
              size={ButtonSizes.Medium}
              onClick={() => eventBus.publish(events.setBuyMoreModalOpen, true)}
            >
              BUY MORE DATA
            </Button>
          </div>
        </CardGrayContainer>
      </Card>
    </CardContainer>
  );
}
