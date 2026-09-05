import { Slider } from "#components/ui/slider";
import { Checkbox } from "#components/ui/checkbox";
import { Tooltip, TooltipTrigger, TooltipContent } from "#components/ui/tooltip";
import { FieldGroup, FieldSet, FieldLabel, Field } from "#components/ui/field";

// TODO: Add a "ruler" on sliders to show in the top of it, the values available and the current value
const SliderRuler = ({value}) => {
  return <div className="relative mb-3">
    {[...Array(13).keys()].map((_, i) => (
      <div key={i} className={`absolute w-4 h-4 text-center text-xs  ${value === i + 4 ? 'text-black font-extrabold' : 'text-gray-400 '}`} style={{ left: `calc(${(i / (16 - 4))} * (100% - 16px))` }}>{i + 4}</div>
    ))}
  </div>
}


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
          <FieldLabel>Width ft</FieldLabel>
          <SliderRuler value={width} />
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
          <FieldLabel>Length ft</FieldLabel>
          <SliderRuler value={length} />
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
                <div className="border border-black w-5 h-5 rounded-full">
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
