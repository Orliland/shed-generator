import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
} from "../ui/card";
import { Button } from "../ui/button";
import { FieldGroup } from "../ui/field";

import ShedSizeSection from "./ShedSizeSection";

export default function FloorForm() {
  const [width, setWidth] = useState(10);
  const [length, setLength] = useState(12);

  const [shedArea, setShedArea] = useState(null);
  const [limitSize, setLimitSize] = useState(true);

  useEffect(() => {
    if (limitSize) {
      const newArea = width * length;
      if (newArea > 120) {
        const newLength = Math.floor(120 / width);
        setLength(newLength);
        setShedArea(width * newLength);
      } else {
        setShedArea(newArea);
      }
    } else {
      setShedArea(width * length);
    }
  }, [width]);

  useEffect(() => {
    if (limitSize) {
      const newArea = width * length;
      if (newArea > 120) {
        const newWidth = Math.floor(120 / length);
        setWidth(newWidth);
        setShedArea(newWidth * length);
      } else {
        setShedArea(newArea);
      }
    } else {
      setShedArea(width * length);
    }
  }, [length]);

  useEffect(() => {
    if (limitSize) {
      if (shedArea > 120) {
        setWidth(10);
        setLength(12);
        setShedArea(120);
      }
    }
  }, [limitSize]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shed generator</CardTitle>
        <CardAction>
          <Button>Create Shed</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form
          className="grid grid-cols-3 gap-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <ShedSizeSection
            width={width}
            length={length}
            onWidthChange={setWidth}
            onLengthChange={setLength}
            limitSize={limitSize}
            onLimitSizeChange={setLimitSize}
          />
          <FieldGroup>section 2</FieldGroup>
          <FieldGroup>Area: {shedArea}</FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
