import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { FieldGroup, FieldLegend, FieldSeparator } from "../ui/field";

import ShedSizeSection from "./ShedSizeSection";
import ShedFloorSettingsSection from "./ShedFloorSettingsSection";
import { Button } from "../ui/button";

export default function FloorForm({ className }) {
  const [width, setWidth] = useState(10);
  const [length, setLength] = useState(12);

  const [shedArea, setShedArea] = useState(null);
  const [limitSize, setLimitSize] = useState(true);

  const [addSkids, setAddSkids] = useState(false);
  const [addCornerSupports, setAddCornerSupports] = useState(false);
  const [joistSpacing, setJoistSpacing] = useState("24");

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
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl">Shed generator</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-4"
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
          <FieldSeparator />
          <ShedFloorSettingsSection
            addSkids={addSkids}
            setAddSkids={setAddSkids}
            addCornerSupports={addCornerSupports}
            setAddCornerSupports={setAddCornerSupports}
            joistSpacing={joistSpacing}
            setJoistSpacing={setJoistSpacing}
          />
          <FieldSeparator />
          <div>
            <FieldLegend>Shed Area</FieldLegend>
            <div className="w-full aspect-square grid place-items-center">
              <div
                className="border-2 text-center border-black bg-gray-100 border-dashed font-bold  grid place-content-center "
                style={{
                  width: `${(width * 100) / 16}%`,
                  height: `${(length * 100) / 16}%`,
                }}
              >
                {shedArea} sq ft
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button>Generate Shed</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
