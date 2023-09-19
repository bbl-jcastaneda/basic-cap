import Foundation

@objc public class Basic: NSObject {
    private let custom = ETIdentity()
    @objc public func echo(_ value: String) -> String {
        guard let x =  custom?.getOTP(Date()) else { return "No OTP" }
        print(value)
        return x
    }
}
