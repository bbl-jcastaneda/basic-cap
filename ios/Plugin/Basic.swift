import Foundation

@objc public class Basic: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
