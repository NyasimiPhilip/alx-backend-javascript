/**
 * Creates a new Int8Array with a specified length, sets a value at a specified position,
 * and returns the DataView associated with the underlying ArrayBuffer.
 *
 * @param {number} length - The length of the Int8Array to create.
 * @param {number} position - The position at which to set the value in the Int8Array.
 * @param {number} value - The value to set at the specified position.
 * @returns {DataView} - The DataView associated with the underlying ArrayBuffer.
 * @throws {Error} - Throws an error if the specified position is outside the range of the array.
 */
export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length.
  const buffer = new ArrayBuffer(length);

  // Create a DataView on the ArrayBuffer, starting at position 0 and with the specified length.
  const view = new DataView(buffer, 0, length);

  // Check if the specified position is outside the range of the array.
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position in the Int8Array.
  view.setInt8(position, value);

  // Return the DataView associated with the underlying ArrayBuffer.
  return view;
}
