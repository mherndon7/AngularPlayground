import { BehaviorSubject, Observable, map } from 'rxjs';

/**
 * State of a single error
 *
 * @export
 * @interface ToolError
 */
export interface ToolError {
  detected: boolean;
  message: string;
}

/**
 * Associates a specific name to a tool error.
 *
 * @export
 * @interface ToolErrors
 */
export interface ToolErrors {
  [name: string]: ToolError;
}

/**
 * Parses a multiple tool errors into a single error.
 *
 * This is commonly used as hover information on a submit button
 *
 * @export
 * @param {ToolErrors} toolErrors Errors to parse
 * @return {*}  {ToolError} Combined tool error
 */
export function parseToolErrors(toolErrors: ToolErrors): ToolError {
  let detected = false;
  const messages: string[] = [];

  for (const errorName in toolErrors) {
    const error: ToolError = toolErrors[errorName];
    if (error.detected) {
      detected = true;
      messages.push(error.message);
    }
  }
  messages.sort();
  return { detected: detected, message: messages.join('\n') };
}

/**
 * Creates an obersvable for tracking multiple tool errors
 *
 * @export
 * @return {*}  {Observable<ToolError>} Combine tool error
 */
export function createToolValidationState(
  errors: ToolErrors
): Observable<ToolError> {
  return new BehaviorSubject<ToolErrors>(errors).pipe(
    map((_errors: ToolErrors) => parseToolErrors(_errors))
  );
}
