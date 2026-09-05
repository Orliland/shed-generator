import {
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldLabel,
  Field,
} from "#components/ui/field";
import { Checkbox } from "#components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "#components/ui/radio-group";

export default function ShedFloorSettingsSection({
  addSkids,
  setAddSkids,
  addCornerSupports,
  setAddCornerSupports,
  joistSpacing,
  setJoistSpacing,
}) {
  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Floor joist spacing</FieldLegend>
        <RadioGroup
          value={joistSpacing}
          onValueChange={(value) => setJoistSpacing(value)}
        >
          <Field orientation="horizontal">
            <RadioGroupItem value="16" id="joist16" />
            <FieldLabel htmlFor="joist16">16" oc (heavy duty)</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="24" id="joist24" />
            <FieldLabel htmlFor="joist24">24" oc</FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend>Additional settings</FieldLegend>
        {/* TODO: Add popovers to show images how looks the skids and corner supports */}
        <Field orientation="horizontal">
          <Checkbox
            id="cornerSupports"
            checked={addCornerSupports}
            onCheckedChange={setAddCornerSupports}
          />
          <FieldLabel htmlFor="cornerSupports">Add corner supports</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="skids"
            checked={addSkids}
            onCheckedChange={setAddSkids}
          />
          <FieldLabel htmlFor="skids">Add skids</FieldLabel>
        </Field>
      </FieldSet>
    </FieldGroup>
  );
}
