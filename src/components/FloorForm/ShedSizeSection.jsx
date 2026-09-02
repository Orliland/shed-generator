import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { FieldGroup, FieldSet, FieldLabel, Field } from "../ui/field";

// TODO: Add a "ruler" on sliders to show in the top of it, the values available and the current value
export default function ShedSizeSection({
  width,
  length,
  onWidthChange,
  onLengthChange,
  limitSize,
  onLimitSizeChange,
}) {
  return (
    <FieldGroup>
      <FieldSet>
        <Field>
          <FieldLabel>Width</FieldLabel>
          <Slider
            id="width"
            min={4}
            max={16}
            step={1}
            value={width}
            onValueChange={(newWidth) => onWidthChange(newWidth)}
          />
        </Field>
        <Field>
          <FieldLabel>Length</FieldLabel>
          <Slider
            id="length"
            step={1}
            min={4}
            max={16}
            value={length}
            onValueChange={(newLength) => onLengthChange(newLength)}
          />
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="limit-size"
            name="limit-size"
            checked={limitSize}
            onCheckedChange={onLimitSizeChange}
          />
          <FieldLabel htmlFor="limit-size">
            Limit size to 120 sq ft
            <Tooltip>
              <TooltipTrigger>
                <div className="border-[1px] border-black w-5 h-5 rounded-full">
                  ?
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Some local regulations limit sheds to 120 sq ft. If this
                restriction does not apply to you, turn off the automatic size
                limit.
              </TooltipContent>
            </Tooltip>
          </FieldLabel>
        </Field>
      </FieldSet>
    </FieldGroup>
  );
}
