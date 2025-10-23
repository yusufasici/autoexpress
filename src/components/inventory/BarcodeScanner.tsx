import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, CameraOff, RotateCcw, Flashlight } from 'lucide-react';

interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const BarcodeScanner: React.FC<BarcodeScannerProps> = ({
  onScan,
  onClose,
  isOpen
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReader = useRef<BrowserMultiFormatReader>();
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string>('');
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string>('');
  const [hasFlashlight, setHasFlashlight] = useState(false);
  const [flashOn, setFlashOn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      initializeScanner();
    } else {
      stopScanner();
    }

    return () => {
      stopScanner();
    };
  }, [isOpen]);

  const initializeScanner = async () => {
    try {
      codeReader.current = new BrowserMultiFormatReader();
      
      // Get available video devices
      const videoDevices = await codeReader.current.listVideoInputDevices();
      setDevices(videoDevices);
      
      if (videoDevices.length > 0) {
        // Prefer back camera for mobile devices
        const backCamera = videoDevices.find(device => 
          device.label.toLowerCase().includes('back') ||
          device.label.toLowerCase().includes('rear') ||
          device.label.toLowerCase().includes('environment')
        );
        
        const deviceId = backCamera?.deviceId || videoDevices[0].deviceId;
        setSelectedDevice(deviceId);
        startScanning(deviceId);
      } else {
        setError('No camera found');
      }
    } catch (err) {
      console.error('Scanner initialization error:', err);
      setError('Failed to access camera. Please check permissions.');
    }
  };

  const startScanning = async (deviceId?: string) => {
    if (!codeReader.current || !videoRef.current) return;

    try {
      setIsScanning(true);
      setError('');

      // Check for flashlight support
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          deviceId: deviceId ? { exact: deviceId } : undefined,
          facingMode: deviceId ? undefined : { ideal: 'environment' },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });

      const track = stream.getVideoTracks()[0];
      const capabilities = track.getCapabilities() as any;
      setHasFlashlight('torch' in capabilities);

      // Start decoding
      await codeReader.current.decodeFromVideoDevice(
        deviceId,
        videoRef.current,
        (result, error) => {
          if (result) {
            const barcode = result.getText();
            console.log('Barcode scanned:', barcode);
            onScan(barcode);
            stopScanner();
          }
          
          if (error && !(error instanceof NotFoundException)) {
            console.error('Scan error:', error);
          }
        }
      );
    } catch (err) {
      console.error('Scanning error:', err);
      setError('Camera access denied or not available');
      setIsScanning(false);
    }
  };

  const stopScanner = () => {
    if (codeReader.current) {
      codeReader.current.reset();
    }
    setIsScanning(false);
    setFlashOn(false);
  };

  const toggleFlashlight = async () => {
    if (!videoRef.current) return;

    try {
      const stream = videoRef.current.srcObject as MediaStream;
      const track = stream?.getVideoTracks()[0];
      
      if (track) {
        await track.applyConstraints({
          advanced: [{ torch: !flashOn } as any]
        });
        setFlashOn(!flashOn);
      }
    } catch (err) {
      console.error('Flashlight error:', err);
    }
  };

  const switchCamera = async () => {
    if (devices.length <= 1) return;

    const currentIndex = devices.findIndex(d => d.deviceId === selectedDevice);
    const nextIndex = (currentIndex + 1) % devices.length;
    const nextDevice = devices[nextIndex];
    
    stopScanner();
    setSelectedDevice(nextDevice.deviceId);
    startScanning(nextDevice.deviceId);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Barcode Scanner
            </span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Camera View */}
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full h-64 bg-black rounded-md object-cover"
              playsInline
              muted
            />
            
            {/* Scanning Overlay */}
            {isScanning && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-2 border-blue-500 w-48 h-32 rounded-md">
                  <div className="w-full h-full border border-blue-300 rounded-sm opacity-50" />
                </div>
              </div>
            )}

            {/* Status Badge */}
            <div className="absolute top-2 left-2">
              <Badge variant={isScanning ? "default" : "destructive"}>
                {isScanning ? (
                  <>
                    <Camera className="w-3 h-3 mr-1" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <CameraOff className="w-3 h-3 mr-1" />
                    Stopped
                  </>
                )}
              </Badge>
            </div>

            {/* Camera Controls */}
            <div className="absolute bottom-2 right-2 flex gap-2">
              {hasFlashlight && (
                <Button
                  size="sm"
                  variant={flashOn ? "default" : "outline"}
                  onClick={toggleFlashlight}
                  className="p-2"
                >
                  <Flashlight className="w-4 h-4" />
                </Button>
              )}
              
              {devices.length > 1 && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={switchCamera}
                  className="p-2"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>• Point camera at barcode</p>
            <p>• Keep barcode within the blue frame</p>
            <p>• Ensure good lighting for best results</p>
            {devices.length > 1 && <p>• Use rotate button to switch cameras</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            
            {!isScanning && !error && (
              <Button 
                onClick={() => startScanning(selectedDevice)}
                className="flex-1"
              >
                <Camera className="w-4 h-4 mr-2" />
                Start Scanning
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};